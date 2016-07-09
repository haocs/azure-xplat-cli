FROM debian:jessie

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

ENV NODEJS_APT_ROOT "node_4.x"
ENV NODEJS_VERSION "4.2.4"
ENV AZURECLITEMP /tmp/azure-cli

RUN apt-get update -qq && \
    apt-get install -qqy --no-install-recommends\
      apt-transport-https \
      build-essential \
      curl \
      ca-certificates \
      git \
      lsb-release \
      python-all \
      rlwrap \
      vim \
      nano \
      jq && \
    rm -rf /var/lib/apt/lists/* && \
    curl https://deb.nodesource.com/${NODEJS_APT_ROOT}/pool/main/n/nodejs/nodejs_${NODEJS_VERSION}-1nodesource1~jessie1_amd64.deb > node.deb && \
      dpkg -i node.deb && \
      rm node.deb

ADD ./ $AZURECLITEMP
RUN cd $AZURECLITEMP && \
	npm install ./ -g
RUN rm -rf $AZURECLITEMP

RUN azure telemetry -d && \
	azure config mode arm

ENV EDITOR vim
