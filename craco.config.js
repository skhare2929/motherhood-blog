module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add rule for .md files
      webpackConfig.module.rules.push({
        test: /\.md$/,
        type: 'asset/source',
      });
      return webpackConfig;
    },
  },
};
