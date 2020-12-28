/* global cy, Cypress */
/// <reference types="Cypress" />
const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/dist/mocha';
import HomePage from '../../pageobjects/Homepage';

describe('Web Example', function () {
    qase([],
    it('shoud visit the web and close the popup', function() {
        const home = new HomePage();
        home.visit();
        home.isReady();
        home.closePopUp();
    }));
});


