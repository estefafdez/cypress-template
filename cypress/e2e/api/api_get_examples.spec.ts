const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/mocha';

describe('API GET 200 Request', function () {
  qase(
    [1],
    it('[1, API] should get a 200 response after a GET request for the complete list of users', function () {
      cy.request({
        method: 'GET',
        url: env.apiURL + '/api/users?page=2',
      }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).property('page').to.equal(2);
        expect(response.body).property('per_page').to.equal(6);
        expect(response.body).property('total').to.equal(12);
        expect(response.body).property('total_pages').to.equal(2);
        expect(response.body).property('data');
        expect(response.body).property('support');
        expect(response.body.support).property('url').to.contain('https://contentcaddy.io?utm_source=reqres');
        expect(response.body.support)
          .property('text')
          .to.equal('Tired of writing endless social media content? Let Content Caddy generate it for you.');
      });
    }),
  );

  qase(
    [2],
    it('[2, API] should get a 200 response after a GET request for a single user', function () {
      cy.request({
        method: 'GET',
        url: env.apiURL + '/api/users/2',
      }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).property('data');
        expect(response.body.data).property('id').to.equal(2);
        expect(response.body.data).property('email').to.equal('janet.weaver@reqres.in');
        expect(response.body.data).property('first_name').to.equal('Janet');
        expect(response.body.data).property('last_name').to.equal('Weaver');
        expect(response.body.data).property('avatar').to.equal('https://reqres.in/img/faces/2-image.jpg');

        expect(response.body).property('support');
        expect(response.body.support).property('url').to.contain('https://contentcaddy.io?utm_source=reqres');
        expect(response.body.support)
          .property('text')
          .to.equal('Tired of writing endless social media content? Let Content Caddy generate it for you.');
      });
    }),
  );

  qase(
    [4],
    it('[4, API] should get a 200 response after a GET request for a list of resources', function () {
      cy.request({
        method: 'GET',
        url: env.apiURL + '/api/unknown',
      }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).property('page').to.equal(1);
        expect(response.body).property('per_page').to.equal(6);
        expect(response.body).property('total').to.equal(12);
        expect(response.body).property('total_pages').to.equal(2);

        expect(response.body).property('data');

        expect(response.body).property('support');
        expect(response.body.support).property('url').to.contain('https://contentcaddy.io?utm_source=reqres');
        expect(response.body.support)
          .property('text')
          .to.equal('Tired of writing endless social media content? Let Content Caddy generate it for you.');
      });
    }),
  );

  qase(
    [5],
    it('[5, API] should get a 200 response after a GET request for a single resource from a list', function () {
      cy.request({
        method: 'GET',
        url: env.apiURL + '/api/unknown/2',
      }).then(response => {
        expect(response.status).to.eq(200);

        expect(response.body.data).property('id').to.equal(2);
        expect(response.body.data).property('name').to.equal('fuchsia rose');
        expect(response.body.data).property('year').to.equal(2001);
        expect(response.body.data).property('color').to.equal('#C74375');
        expect(response.body.data).property('pantone_value').to.equal('17-2031');

        expect(response.body).property('support');
        expect(response.body.support).property('url').to.contain('https://contentcaddy.io?utm_source=reqres');
        expect(response.body.support)
          .property('text')
          .to.equal('Tired of writing endless social media content? Let Content Caddy generate it for you.');
      });
    }),
  );

  qase(
    [7],
    it('[7, API] should get a delay response 200 response after a GET request for a single resource from a list', function () {
      cy.request({
        method: 'GET',
        url: env.apiURL + '/api/unknown/2?delay=3',
      }).then(response => {
        expect(response.status).to.eq(200);

        expect(response.body.data).property('id').to.equal(2);
        expect(response.body.data).property('name').to.equal('fuchsia rose');
        expect(response.body.data).property('year').to.equal(2001);
        expect(response.body.data).property('color').to.equal('#C74375');
        expect(response.body.data).property('pantone_value').to.equal('17-2031');

        expect(response.body).property('support');
        expect(response.body.support).property('url').to.contain('https://contentcaddy.io?utm_source=reqres');
        expect(response.body.support)
          .property('text')
          .to.equal('Tired of writing endless social media content? Let Content Caddy generate it for you.');
      });
    }),
  );
});

describe('API GET 4xx Request', function () {
  qase(
    [3],
    it('[3, API] should get a 404 response after a GET request for a single user not found', function () {
      cy.request({
        method: 'GET',
        url: env.apiURL + '/api/users/23',
        failOnStatusCode: false,
      }).then(response => {
        expect(response.status).to.eq(404);
      });
    }),
  );

  qase(
    [6],
    it('[6, API] should get a 404 response after a GET request for a single resource from a list not found', function () {
      cy.request({
        method: 'GET',
        url: env.apiURL + '/api/unknown/23',
        failOnStatusCode: false,
      }).then(response => {
        expect(response.status).to.eq(404);
      });
    }),
  );
});
