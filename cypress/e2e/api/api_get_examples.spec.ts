const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/mocha';
import { RequestResponse, UserData } from 'cypress/types/getUserResponse';

describe('API Tests with Typed Responses', function () {
  qase(
    [1],
    it('[1, API] should get a 200 response after a GET request for the complete list of users', function () {
      cy.request<RequestResponse>({
        method: 'GET',
        url: env.apiURL + '/api/users?page=2',
      }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body.page).to.equal(2);
        expect(response.body.per_page).to.equal(6);
        expect(response.body.total).to.equal(12);
        expect(response.body.total_pages).to.equal(2);
        expect(response.body.data).to.be.an('array');
        cy.checkUrlAndTextResponse(response);
      });
    }),
  );

  qase(
    [2],
    it('[2, API] should get a 200 response after a GET request for a single user', function () {
      cy.request<RequestResponse>({
        method: 'GET',
        url: env.apiURL + '/api/users/2',
      }).then(response => {
        expect(response.status).to.eq(200);
        const user = response.body.data as UserData;
        expect(user.id).to.equal(2);
        expect(user.email).to.equal('janet.weaver@reqres.in');
        expect(user.first_name).to.equal('Janet');
        expect(user.last_name).to.equal('Weaver');
        expect(user.avatar).to.equal('https://reqres.in/img/faces/2-image.jpg');
        cy.checkUrlAndTextResponse(response);
      });
    }),
  );

  qase(
    [5],
    it('[5, API] should get a 200 response after a GET request for a single resource from a list', function () {
      cy.request<RequestResponse>({
        method: 'GET',
        url: env.apiURL + '/api/unknown/2',
      }).then(response => {
        expect(response.status).to.eq(200);
        const resource = response.body.data as {
          id: number;
          name: string;
          year: number;
          color: string;
          pantone_value: string;
        };
        expect(resource.id).to.equal(2);
        expect(resource.name).to.equal('fuchsia rose');
        expect(resource.year).to.equal(2001);
        expect(resource.color).to.equal('#C74375');
        expect(resource.pantone_value).to.equal('17-2031');
        cy.checkUrlAndTextResponse(response);
      });
    }),
  );
});
