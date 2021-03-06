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
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg11203/providers/Microsoft.Web/sites/webappclitests2586/config/publishingcredentials/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg11203/providers/Microsoft.Web/sites/webappclitests2586/publishingcredentials/$webappclitests2586\",\"name\":\"webappclitests2586\",\"type\":\"Microsoft.Web/sites/publishingcredentials\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":null,\"publishingUserName\":\"$webappclitests2586\",\"publishingPassword\":\"J6mY0yT3vbcMLh5ZQMvD2B0k7yrcEPT0l1ZGfG1ANcu5WggQ7CGDwGuFiurj\",\"publishingPasswordHash\":null,\"publishingPasswordHashSalt\":null,\"metadata\":null,\"isDeleted\":false,\"scmUri\":\"https://$webappclitests2586:J6mY0yT3vbcMLh5ZQMvD2B0k7yrcEPT0l1ZGfG1ANcu5WggQ7CGDwGuFiurj@webappclitests2586.scm.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '683',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '09629bb8-bbae-4e34-976b-c22496077b6b',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '9b8c24cc-0237-4b5a-b276-2fc92dda10e8',
  'x-ms-routing-request-id': 'CENTRALUS:20160914T212442Z:9b8c24cc-0237-4b5a-b276-2fc92dda10e8',
  date: 'Wed, 14 Sep 2016 21:24:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg11203/providers/Microsoft.Web/sites/webappclitests2586/config/publishingcredentials/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg11203/providers/Microsoft.Web/sites/webappclitests2586/publishingcredentials/$webappclitests2586\",\"name\":\"webappclitests2586\",\"type\":\"Microsoft.Web/sites/publishingcredentials\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":null,\"publishingUserName\":\"$webappclitests2586\",\"publishingPassword\":\"J6mY0yT3vbcMLh5ZQMvD2B0k7yrcEPT0l1ZGfG1ANcu5WggQ7CGDwGuFiurj\",\"publishingPasswordHash\":null,\"publishingPasswordHashSalt\":null,\"metadata\":null,\"isDeleted\":false,\"scmUri\":\"https://$webappclitests2586:J6mY0yT3vbcMLh5ZQMvD2B0k7yrcEPT0l1ZGfG1ANcu5WggQ7CGDwGuFiurj@webappclitests2586.scm.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '683',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '09629bb8-bbae-4e34-976b-c22496077b6b',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '9b8c24cc-0237-4b5a-b276-2fc92dda10e8',
  'x-ms-routing-request-id': 'CENTRALUS:20160914T212442Z:9b8c24cc-0237-4b5a-b276-2fc92dda10e8',
  date: 'Wed, 14 Sep 2016 21:24:42 GMT',
  connection: 'close' });
 return result; }]];