/* global cy, Cypress */
/// <reference types="Cypress" />
const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/dist/mocha';
import HomePage from '../../support/pageobjects/HomePage';

describe('Progress Bar Tests', function () {

    const home = new HomePage();

    beforeEach(function() {
        home.visit();
        home.isReady();
    });

    qase([26],
    it('should visit the web and click on the JQuery Download Progress bars Link', function() {
        home.closePopUp();
        const jqueryDownloadProgressBar = home.clickOnJQueryDownloadProgressBarsLinkHeader();
        jqueryDownloadProgressBar.isReady();
    }));

    qase([27],
    it('should visit the web and click on the Bootstrap Progress bar Link', function() {
        home.closePopUp();
        const bootstrapProgressBar = home.clickOnBootstrapProgressBarLinkHeader();
        bootstrapProgressBar.isReady();
    }));

    qase([28],
    it('should visit the web and click on the Drag & Drop Sliders Link', function() {
        home.closePopUp();
        const dragAndDropSlider = home.clickOnDragAndDropSlidersLinkHeader();
        dragAndDropSlider.isReady();
    }));
});