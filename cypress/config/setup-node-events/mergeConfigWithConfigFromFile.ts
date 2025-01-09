import fs from 'fs-extra';
import path from 'node:path';

/**
 * @description Method to get the configuration files for each environment.
 * Documentation: https://docs.cypress.io/api/plugins/configuration-api.html#Switch-between-multiple-configuration-files
 */
const getConfigurationByFile = (file: string) => {
  const pathToConfigFile = path.resolve(__dirname, '../../config', `${file}.json`);
  return fs.readJsonSync(pathToConfigFile);
};

export const mergeConfigWithConfigFromFile = (config: Cypress.PluginConfigOptions): Cypress.PluginConfigOptions => {
  // Accept a configFile value or use qa by default
  const file = config.env.configFile || 'qa';
  const configFromFile = getConfigurationByFile(file);

  const {
    e2e: { env: envFromFile },
    ...restConfigFromFile
  } = configFromFile;

  const newConfig = {
    ...config,
    ...restConfigFromFile,
    env: { ...config.env, ...envFromFile },
  };

  return newConfig;
};
