// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2804ae14-b835-4630-ac14-44f01a5a8c28',
    name: 'Windows Azure MSDN - Visual Studio Ultimate',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '4b1066c2-4cbb-4eda-800a-78581bcb602b',
    registeredProviders: ['website'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_APIAPP_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2804ae14-b835-4630-ac14-44f01a5a8c28/resourcegroups/xplatapiappDeploy6196?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/2804ae14-b835-4630-ac14-44f01a5a8c28/resourceGroups/xplatapiappDeploy6196\",\"name\":\"xplatapiappDeploy6196\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '195',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1189',
  'x-ms-request-id': 'e30895e0-af84-46e3-af11-be24f12abb65',
  'x-ms-correlation-request-id': 'e30895e0-af84-46e3-af11-be24f12abb65',
  'x-ms-routing-request-id': 'WESTUS:20150610T233849Z:e30895e0-af84-46e3-af11-be24f12abb65',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 10 Jun 2015 23:38:48 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/2804ae14-b835-4630-ac14-44f01a5a8c28/providers/Microsoft.AppService/deploymenttemplates/Microsoft.Azure.AppService.ApiApps.TestBench/listmetadata?api-version=2015-03-01-preview')
  .reply(200, "{\"value\":{\"microserviceId\":\"Microsoft.Azure.AppService.ApiApps.TestBench\",\"displayName\":\"Test Bench\",\"appSettings\":[],\"dependsOn\":[]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2e3af792-84ab-4ee4-940a-998a3efb0f38',
  'x-rp-requesturi': 'https://apiapp-rp-prod-all.msp.windows.net/subscriptions/2804ae14-b835-4630-ac14-44f01a5a8c28/providers/Microsoft.AppService/deploymenttemplates/Microsoft.Azure.AppService.ApiApps.TestBench/listmetadata?api-version=2015-03-01-preview',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-correlation-request-id': '44ac06a8-1c19-4639-9ac6-32a58c0f0420',
  'x-ms-routing-request-id': 'WESTUS:20150610T233850Z:44ac06a8-1c19-4639-9ac6-32a58c0f0420',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 10 Jun 2015 23:38:49 GMT' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplatapiappDeploy6196'];};