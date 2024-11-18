import { RequestResponse } from 'cypress/types/getUserResponse';

declare global {
  namespace Cypress {
    interface Chainable {
      checkUrlAndTextResponse: typeof checkUrlAndTextResponse;
    }
  }
}

/**
 * @description  Method to check the URL and text response from the GET request
 */
export const checkUrlAndTextResponse = (response: Cypress.Response<RequestResponse>): any => {
  expect(response.body.support).property('url').to.contain('https://contentcaddy.io?utm_source=reqres');
  expect(response.body.support)
    .property('text')
    .to.equal('Tired of writing endless social media content? Let Content Caddy generate it for you.');
};
