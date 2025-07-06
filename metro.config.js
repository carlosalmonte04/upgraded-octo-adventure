const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'flow'],
    extraNodeModules: {
      'react-dom': require.resolve('react-native'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
