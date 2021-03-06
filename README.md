# volto-educal-theme

A [volto](https://plone.org/what-is-plone/volto) theme [add-on](https://6.dev-docs.plone.org/volto/addons/index.html) based on [educal theme](https://themeforest.net/item/educal-online-learning-and-education-vue-js-template/37099827).

## Features

1. Support for nested navigation links.
1. Categorization of pages based on tags using the _categorization menu_ in the left hand side of the header.
1. Customizable pre-footer, as another add-on [volto-block-banner](https://github.com/collective/volto-block-banner).

## Installation

1. Bootstrap a new volto project.
1. Paste the content of this project in the `src/addons` directory.
1. Add `@plone-collective/volto-educal-theme` in the `addons` & `workspaces` fields of the bootstrapped project's `package.json`. For a more detailed guide, on how to install an add-on [visit here](https://6.dev-docs.plone.org/volto/addons/index.html#loading-addon-configuration),
1. Don't forget to change this line in `src/theme.js` of the bootstrapped project.

```diff
- import 'semantic-ui-less/semantic.less';
+ import '@plone-collective/volto-educal-theme/semantic.less';
  import '@plone/volto/../theme/themes/pastanaga/extras/extras.less';
```

## Preview

![image](/assets/github/preview.png)
