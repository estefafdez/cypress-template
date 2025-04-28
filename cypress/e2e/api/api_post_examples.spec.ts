const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/mocha';
import { User } from '../../types/user';

let user1: User;
let user2: User;
let user3: User;
let user4: User;

before(() => {
  cy.fixture('users/user1').then(fixUser1 => {
    user1 = fixUser1;
  });

  cy.fixture('users/user2').then(fixUser2 => {
    user2 = fixUser2;
  });
  cy.fixture('users/user3').then(fixUser3 => {
    user3 = fixUser3;
  });

  cy.fixture('users/user4').then(fixUser4 => {
    user4 = fixUser4;
  });
});

describe('API POST 200 Request', function () {
  qase(
    [8],
    it('[8, API] should get a 201 response after a POST request to create a new user', function () {
      cy.request({
        method: 'POST',
        url: env.apiURL + '/api/users',
        body: {
          name: user1.name,
          job: user1.job,
        },
        headers: {
          'x-api-key': 'reqres-free-v1',
        },
      }).then(response => {
        expect(response.status).to.eq(201);
        expect(response.body).property('name').to.equal('Estefania');
        expect(response.body).property('job').to.equal('QA Automation Engineer');
        expect(response.body).have.property('id');
        expect(response.body).have.property('createdAt');
      });
    }),
  );

  qase(
    [9],
    it('[9, API] should get a 200 response after a POST request to register a new user successfully', function () {
      cy.request({
        method: 'POST',
        url: env.apiURL + '/api/register',
        body: {
          email: user1.email,
          password: user1.password,
        },
        headers: {
          'x-api-key': 'reqres-free-v1',
        },
      }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).have.property('id');
        expect(response.body).have.property('token');
      });
    }),
  );

  qase(
    [11],
    it('[11, API] should get a 200 response after a POST request to login with a user successfully', function () {
      cy.request({
        method: 'POST',
        url: env.apiURL + '/api/login',
        body: {
          email: user2.email,
          password: user2.password,
        },
        headers: {
          'x-api-key': 'reqres-free-v1',
        },
      }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).property('token').to.eq('QpwL5tke4Pnpja7X4');
      });
    }),
  );
});

describe('API POST 4xx Request', function () {
  qase(
    [10],
    it('[10, API] should get a 400 response after a POST request to register a new user without a password set unsuccessfully', function () {
      cy.request({
        method: 'POST',
        url: env.apiURL + '/api/register',
        body: {
          email: user3.email,
        },
        headers: {
          'x-api-key': 'reqres-free-v1',
        },
        failOnStatusCode: false,
      }).then(response => {
        expect(response.status).to.eq(400);
        expect(response.body).property('error').to.eq('Missing password');
      });
    }),
  );

  qase(
    [12],
    it('[12, API] should get a 400 response after a POST request to login with a user without a password set unsuccessfully', function () {
      cy.request({
        method: 'POST',
        url: env.apiURL + '/api/login',
        body: {
          email: user4.email,
        },
        headers: {
          'x-api-key': 'reqres-free-v1',
        },
        failOnStatusCode: false,
      }).then(response => {
        expect(response.status).to.eq(400);
        expect(response.body).property('error').to.eq('Missing password');
      });
    }),
  );
});
