import { RequestResponse } from 'cypress/types/getUserResponse';

declare global {
  namespace Cypress {
    interface Chainable {
      checkUrlAndTextResponse: typeof checkUrlAndTextResponse;
    }
  }
}

/**
 * @description  Method to check that the GET response includes the support URL and text
 */
export const checkUrlAndTextResponse = (response: Cypress.Response<RequestResponse>): any => {
  // The sponsor message in `support` is rotated by the API, so only check its shape.
  expect(response.body.support).property('url').to.be.a('string').and.not.be.empty;
  expect(response.body.support).property('text').to.be.a('string').and.not.be.empty;
};
