// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8d57ddbd-c779-40ea-b660-1015f4bf027d',
    name: 'Visual Studio Enterprise',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12319/providers/Microsoft.Web/serverfarms/armappserviceplantests9453?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12319/providers/Microsoft.Web/serverfarms/armappserviceplantests9453\",\"name\":\"armappserviceplantests9453\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"serverFarmId\":0,\"name\":\"armappserviceplantests9453\",\"workerSize\":0,\"workerSizeId\":0,\"workerTierName\":null,\"numberOfWorkers\":1,\"currentWorkerSize\":0,\"currentWorkerSizeId\":0,\"currentNumberOfWorkers\":1,\"status\":0,\"webSpace\":\"testrg12319-WestUSwebspace\",\"subscription\":\"8d57ddbd-c779-40ea-b660-1015f4bf027d\",\"adminSiteName\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"maximumNumberOfWorkers\":3,\"planName\":\"VirtualDedicatedPlan\",\"adminRuntimeSiteName\":null,\"computeMode\":0,\"siteMode\":null,\"geoRegion\":\"West US\",\"perSiteScaling\":false,\"numberOfSites\":0,\"hostingEnvironmentId\":null,\"tags\":null,\"kind\":null,\"resourceGroup\":\"testrg12319\",\"reserved\":false,\"mdmId\":null},\"sku\":{\"name\":\"B1\",\"tier\":\"Basic\",\"size\":\"B1\",\"family\":\"B\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1023',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'ab343fb9-02d8-4309-951d-1d03fbfdb5b1',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'a22cec93-b258-460a-828f-99a33898f16f',
  'x-ms-routing-request-id': 'WESTUS2:20160912T075716Z:a22cec93-b258-460a-828f-99a33898f16f',
  date: 'Mon, 12 Sep 2016 07:57:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12319/providers/Microsoft.Web/serverfarms/armappserviceplantests9453?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg12319/providers/Microsoft.Web/serverfarms/armappserviceplantests9453\",\"name\":\"armappserviceplantests9453\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"serverFarmId\":0,\"name\":\"armappserviceplantests9453\",\"workerSize\":0,\"workerSizeId\":0,\"workerTierName\":null,\"numberOfWorkers\":1,\"currentWorkerSize\":0,\"currentWorkerSizeId\":0,\"currentNumberOfWorkers\":1,\"status\":0,\"webSpace\":\"testrg12319-WestUSwebspace\",\"subscription\":\"8d57ddbd-c779-40ea-b660-1015f4bf027d\",\"adminSiteName\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"maximumNumberOfWorkers\":3,\"planName\":\"VirtualDedicatedPlan\",\"adminRuntimeSiteName\":null,\"computeMode\":0,\"siteMode\":null,\"geoRegion\":\"West US\",\"perSiteScaling\":false,\"numberOfSites\":0,\"hostingEnvironmentId\":null,\"tags\":null,\"kind\":null,\"resourceGroup\":\"testrg12319\",\"reserved\":false,\"mdmId\":null},\"sku\":{\"name\":\"B1\",\"tier\":\"Basic\",\"size\":\"B1\",\"family\":\"B\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1023',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'ab343fb9-02d8-4309-951d-1d03fbfdb5b1',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'a22cec93-b258-460a-828f-99a33898f16f',
  'x-ms-routing-request-id': 'WESTUS2:20160912T075716Z:a22cec93-b258-460a-828f-99a33898f16f',
  date: 'Mon, 12 Sep 2016 07:57:15 GMT',
  connection: 'close' });
 return result; }]];