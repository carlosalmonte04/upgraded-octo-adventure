module.exports = {
  presets: [
    '@react-native/babel-preset',
    '@babel/preset-typescript',
    '@babel/preset-flow',
  ],
  plugins: [
    ['nativewind/babel'],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.ts', '.tsx', '.flow'],
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
