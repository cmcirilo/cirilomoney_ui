export const environment = {
  production: true,
  apiUrl: 'https://cirilomoney-api.herokuapp.com',

  tokenAllowedDomains: [new RegExp('cirilomoney-api.herokuapp.com')],
  tokenDisallowedRoutes: [new RegExp('\/oauth\/token')]
};
