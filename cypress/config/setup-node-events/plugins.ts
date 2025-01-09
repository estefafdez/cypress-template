//@ts-expect-error "Could not find a declaration file for module '@bahmutov/cy-grep/src/plugin'."
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';

type InstallPluginFunction = (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
) => Promise<Cypress.PluginConfigOptions>;

/**
 * The collection of plugins to use with Cypress
 * @param on  `on` is used to hook into various events Cypress emits
 * @param config  `config` is the resolved Cypress config
 */
export const plugins = async (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  let configWithPlugins = { ...config };

  // Add image snapshot plugin
  addMatchImageSnapshotPlugin(on, configWithPlugins);
};
