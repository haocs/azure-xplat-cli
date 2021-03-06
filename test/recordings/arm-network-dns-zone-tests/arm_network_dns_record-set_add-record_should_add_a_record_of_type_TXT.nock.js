// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9316/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9316\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-8009-4ce6f201d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-01.azure-dns.com.\",\"ns2-01.azure-dns.net.\",\"ns3-01.azure-dns.org.\",\"ns4-01.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '508',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-8009-4ce6f201d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd996efb8-820c-462c-8878-df354a17eaeb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '8331c0ce-d06d-4e58-965f-fba105eafa2f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124414Z:8331c0ce-d06d-4e58-965f-fba105eafa2f',
  date: 'Mon, 29 Aug 2016 12:44:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9316/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9316\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-8009-4ce6f201d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-01.azure-dns.com.\",\"ns2-01.azure-dns.net.\",\"ns3-01.azure-dns.org.\",\"ns4-01.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '508',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-8009-4ce6f201d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd996efb8-820c-462c-8878-df354a17eaeb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '8331c0ce-d06d-4e58-965f-fba105eafa2f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124414Z:8331c0ce-d06d-4e58-965f-fba105eafa2f',
  date: 'Mon, 29 Aug 2016 12:44:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9316/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9316\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"d1899f12-e110-4564-a96c-9f6153647b28\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.example1.com.\",\"TTL\":3600,\"TXTRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '399',
  'content-type': 'application/json; charset=utf-8',
  etag: 'd1899f12-e110-4564-a96c-9f6153647b28',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'bcbfc2a5-168f-48d8-bcd3-d353266f3107',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '01f64fe3-627e-4c29-874e-087d0f5791c5',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124415Z:01f64fe3-627e-4c29-874e-087d0f5791c5',
  date: 'Mon, 29 Aug 2016 12:44:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9316/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9316\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"d1899f12-e110-4564-a96c-9f6153647b28\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.example1.com.\",\"TTL\":3600,\"TXTRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '399',
  'content-type': 'application/json; charset=utf-8',
  etag: 'd1899f12-e110-4564-a96c-9f6153647b28',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'bcbfc2a5-168f-48d8-bcd3-d353266f3107',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '01f64fe3-627e-4c29-874e-087d0f5791c5',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124415Z:01f64fe3-627e-4c29-874e-087d0f5791c5',
  date: 'Mon, 29 Aug 2016 12:44:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9316/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9316\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"4fb0dacc-368d-4ec6-8d69-b11b4c1f5e39\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.example1.com.\",\"TTL\":3600,\"TXTRecords\":[{\"value\":[\"longtexthere\"]}]}}", { 'cache-control': 'private',
  'content-length': '425',
  'content-type': 'application/json; charset=utf-8',
  etag: '4fb0dacc-368d-4ec6-8d69-b11b4c1f5e39',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '9806a275-cefe-4e87-af95-cc612f0214f3',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '6455f893-0da9-492d-9946-2b39804d8751',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124416Z:6455f893-0da9-492d-9946-2b39804d8751',
  date: 'Mon, 29 Aug 2016 12:44:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9316/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9316\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"4fb0dacc-368d-4ec6-8d69-b11b4c1f5e39\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.example1.com.\",\"TTL\":3600,\"TXTRecords\":[{\"value\":[\"longtexthere\"]}]}}", { 'cache-control': 'private',
  'content-length': '425',
  'content-type': 'application/json; charset=utf-8',
  etag: '4fb0dacc-368d-4ec6-8d69-b11b4c1f5e39',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '9806a275-cefe-4e87-af95-cc612f0214f3',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '6455f893-0da9-492d-9946-2b39804d8751',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124416Z:6455f893-0da9-492d-9946-2b39804d8751',
  date: 'Mon, 29 Aug 2016 12:44:15 GMT',
  connection: 'close' });
 return result; }]];