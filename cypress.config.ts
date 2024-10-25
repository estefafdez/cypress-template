import { defineConfig } from 'cypress';
import { plugins } from 'cypress/config/setup-node-events/plugins';
import { mergeConfigWithConfigFromFile } from './cypress/config/setup-node-events/mergeConfigWithConfigFromFile';

export default defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  projectId: 'iyhpy5',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'cypress/config/reporter-config.json',
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
  screenshotsFolder: 'report/screenshots',
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  e2e: {
    testIsolation: true,
    async setupNodeEvents(on, config) {
      const newConfig = mergeConfigWithConfigFromFile(config);
      const pluginsConfig = await plugins(on, newConfig);
      console.info('\n> Cypress config:\n', pluginsConfig);
      return pluginsConfig;
    },
    specPattern: 'cypress/e2e/**/*.ts',
  },
});
