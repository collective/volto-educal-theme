const path = require('path');
const plugins = (defaultPlugins) => {
  return defaultPlugins;
};
const modify = (config, { target, dev }, webpack) => {
  const themeConfigPath = `${__dirname}/theme/theme.config`;
  config.resolve.alias['../../theme.config$'] = themeConfigPath;
  config.resolve.alias['../../theme.config'] = themeConfigPath;

  const projectRootPath = path.resolve('.');
  const themesPath = `${projectRootPath}/node_modules/@plone-collective/volto-educal-theme/theme/themes`;

  config.resolve.alias['educal-volto-themes'] = themesPath;
  config.resolve.alias['ui-theme'] = `${themesPath}/educal/`;
  config.resolve.alias['ui-assets'] = `${themesPath}/educal/assets`;

  return config;
};

module.exports = {
  plugins,
  modify,
};
