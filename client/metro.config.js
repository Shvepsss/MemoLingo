const path = require('path');

const extraNodeModules = {
  app: path.resolve(path.join(__dirname, './')),
};

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules,
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
