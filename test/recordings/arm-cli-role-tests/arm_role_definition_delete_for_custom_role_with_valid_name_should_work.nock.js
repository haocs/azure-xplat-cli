// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4004a9fd-d58e-48dc-aeb2-4a4aec58606f',
    name: 'AAD_POLICY_ADMINISTRATION_SERVICE_TEST_CLI',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1273adef-00a3-4086-a51a-dbcce1857d36',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_AD_TEST_USER_PRINCIPAL_NAME'] = 'testUserAuto1@rbacCliTest.onmicrosoft.com';
  process.env['AZURE_AD_TEST_PASSWORD'] = 'Pa$$w0rd';
  process.env['AZURE_AD_TEST_GROUP_NAME'] = 'testgroupauto';
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_AD_TEST_SP_DISPLAY_NAME'] = 'mytestapprandomauto0012345';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/049bbe0d-b5ea-4f22-ae6b-6489c48ea1d4?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_80355813-f724-48e5-bd37-5cf01f27fad6\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2016-03-11T03:38:08.1609015Z\",\"updatedOn\":\"2016-03-11T03:38:08.1609015Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/049bbe0d-b5ea-4f22-ae6b-6489c48ea1d4\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"049bbe0d-b5ea-4f22-ae6b-6489c48ea1d4\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3855f204-dc54-4161-bdbd-4348974194ae',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'ce0ffef4-5098-4b02-892b-20c84038096c',
  'x-ms-routing-request-id': 'WESTUS:20160311T033809Z:ce0ffef4-5098-4b02-892b-20c84038096c',
  date: 'Fri, 11 Mar 2016 03:38:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/049bbe0d-b5ea-4f22-ae6b-6489c48ea1d4?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_80355813-f724-48e5-bd37-5cf01f27fad6\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2016-03-11T03:38:08.1609015Z\",\"updatedOn\":\"2016-03-11T03:38:08.1609015Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/049bbe0d-b5ea-4f22-ae6b-6489c48ea1d4\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"049bbe0d-b5ea-4f22-ae6b-6489c48ea1d4\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3855f204-dc54-4161-bdbd-4348974194ae',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'ce0ffef4-5098-4b02-892b-20c84038096c',
  'x-ms-routing-request-id': 'WESTUS:20160311T033809Z:ce0ffef4-5098-4b02-892b-20c84038096c',
  date: 'Fri, 11 Mar 2016 03:38:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions?$filter=roleName%20eq%20%27TestRole_80355813-f724-48e5-bd37-5cf01f27fad6%27&api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"properties\":{\"roleName\":\"TestRole_80355813-f724-48e5-bd37-5cf01f27fad6\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2016-03-11T03:38:08.1609015Z\",\"updatedOn\":\"2016-03-11T03:38:08.1609015Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/049bbe0d-b5ea-4f22-ae6b-6489c48ea1d4\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"049bbe0d-b5ea-4f22-ae6b-6489c48ea1d4\"}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '766',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '10c6d938-382f-424b-98d2-4572c66b9e1a',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '1dd3c93f-b8a8-4ab5-a967-3f0ac0b48238',
  'x-ms-routing-request-id': 'WESTUS:20160311T033809Z:1dd3c93f-b8a8-4ab5-a967-3f0ac0b48238',
  date: 'Fri, 11 Mar 2016 03:38:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions?$filter=roleName%20eq%20%27TestRole_80355813-f724-48e5-bd37-5cf01f27fad6%27&api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"properties\":{\"roleName\":\"TestRole_80355813-f724-48e5-bd37-5cf01f27fad6\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2016-03-11T03:38:08.1609015Z\",\"updatedOn\":\"2016-03-11T03:38:08.1609015Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/049bbe0d-b5ea-4f22-ae6b-6489c48ea1d4\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"049bbe0d-b5ea-4f22-ae6b-6489c48ea1d4\"}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '766',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '10c6d938-382f-424b-98d2-4572c66b9e1a',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '1dd3c93f-b8a8-4ab5-a967-3f0ac0b48238',
  'x-ms-routing-request-id': 'WESTUS:20160311T033809Z:1dd3c93f-b8a8-4ab5-a967-3f0ac0b48238',
  date: 'Fri, 11 Mar 2016 03:38:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/049bbe0d-b5ea-4f22-ae6b-6489c48ea1d4?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_80355813-f724-48e5-bd37-5cf01f27fad6\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2016-03-11T03:38:08.1609015Z\",\"updatedOn\":\"2016-03-11T03:38:08.1609015Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/049bbe0d-b5ea-4f22-ae6b-6489c48ea1d4\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"049bbe0d-b5ea-4f22-ae6b-6489c48ea1d4\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0d46e093-74c9-4c32-bb3f-f0b112e8ba20',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'e22cba72-2793-44ec-a736-1f51527fc127',
  'x-ms-routing-request-id': 'WESTUS:20160311T033810Z:e22cba72-2793-44ec-a736-1f51527fc127',
  date: 'Fri, 11 Mar 2016 03:38:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/049bbe0d-b5ea-4f22-ae6b-6489c48ea1d4?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_80355813-f724-48e5-bd37-5cf01f27fad6\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2016-03-11T03:38:08.1609015Z\",\"updatedOn\":\"2016-03-11T03:38:08.1609015Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/049bbe0d-b5ea-4f22-ae6b-6489c48ea1d4\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"049bbe0d-b5ea-4f22-ae6b-6489c48ea1d4\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0d46e093-74c9-4c32-bb3f-f0b112e8ba20',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'e22cba72-2793-44ec-a736-1f51527fc127',
  'x-ms-routing-request-id': 'WESTUS:20160311T033810Z:e22cba72-2793-44ec-a736-1f51527fc127',
  date: 'Fri, 11 Mar 2016 03:38:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions?$filter=roleName%20eq%20%27invalid%27&api-version=2015-07-01')
  .reply(200, "{\"value\":[],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6b0ef19a-a794-4f3e-a719-452c8d4feb4e',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '36b88040-86d9-4f3d-b56e-abc1dbd430f9',
  'x-ms-routing-request-id': 'WESTUS:20160311T033811Z:36b88040-86d9-4f3d-b56e-abc1dbd430f9',
  date: 'Fri, 11 Mar 2016 03:38:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions?$filter=roleName%20eq%20%27invalid%27&api-version=2015-07-01')
  .reply(200, "{\"value\":[],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6b0ef19a-a794-4f3e-a719-452c8d4feb4e',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '36b88040-86d9-4f3d-b56e-abc1dbd430f9',
  'x-ms-routing-request-id': 'WESTUS:20160311T033811Z:36b88040-86d9-4f3d-b56e-abc1dbd430f9',
  date: 'Fri, 11 Mar 2016 03:38:10 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['80355813-f724-48e5-bd37-5cf01f27fad6','049bbe0d-b5ea-4f22-ae6b-6489c48ea1d4'];};