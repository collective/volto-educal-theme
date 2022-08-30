# volto-educal-theme

A [volto](https://plone.org/what-is-plone/volto) theme [add-on](https://6.dev-docs.plone.org/volto/addons/index.html) based on [educal theme](https://themeforest.net/item/educal-online-learning-and-education-vue-js-template/37099827).

## Features

1. Support for nested navigation links.
1. Categorization of pages based on tags using the _categorization menu_ in the left hand side of the header.
1. Custom blocks support.
   - [Banner Area Block](src/components/Blocks/BannerAreaBlock/README.md)
   - [Category Teaser Block](src/components/Blocks/CategoryTeaser/README.md)
   - [Course Block](src/components/Blocks/CourseBlock/README.md)
   - [Pricing Block](src/components/Blocks/PricingBlock/README.md)
1. New [listing variation](src/components/Blocks/Listing/README.md) especially for events.
1. Customizable pre-footer block as an add-on [volto-block-banner](https://github.com/collective/volto-block-banner).
1. Customizable hero block as an add-on [volto-educal-hero-block](https://github.com/collective/volto-educal-hero-block).

## Installation

1. Bootstrap a new volto project.
1. Paste the content of this project in the `src/addons` directory.
1. Add `@plone-collective/volto-educal-theme` in the `addons` & `workspaces` fields of the bootstrapped project's `package.json`. For a more detailed guide, on how to install an add-on [visit here](https://6.dev-docs.plone.org/volto/addons/index.html#loading-addon-configuration).
1. **IMPORTANT:** Change this line in `src/theme.js` of the bootstrapped project.

```diff
- import 'semantic-ui-less/semantic.less';
+ import '@plone-collective/volto-educal-theme/semantic.less';
  import '@plone/volto/../theme/themes/pastanaga/extras/extras.less';
```

## Preview

![image](/assets/github/preview.png)
