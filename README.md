<a name="readme-top"></a>

# volto-educal-theme 🎨

## About 💡

A [volto](https://plone.org/what-is-plone/volto) theme [add-on](https://6.dev-docs.plone.org/volto/addons/index.html) based on [educal theme](https://themeforest.net/item/educal-online-learning-and-education-vue-js-template/37099827).

![](/assets/github/preview_1.gif)
![](/assets/github/preview_2.gif)

## Features ✨

1. Blocks 🧱 included with this add-on:

   - [Category Teaser Block](src/components/Blocks/CategoryTeaser/README.md)
   - [Banner Area Block](src/components/Blocks/BannerAreaBlock/README.md)
   - [Course Block](src/components/Blocks/CourseBlock/README.md)
   - [Pricing Block](src/components/Blocks/PricingBlock/README.md)

1. Blocks that are also available as a separate add-on 🎉 :

   - [volto-educal-hero-block](https://github.com/collective/volto-educal-hero-block) (Used as **Hero** block)
   - [volto-block-banner](https://github.com/collective/volto-block-banner) (Used as **Pre-footer** block)

1. New [listing variation](src/components/Blocks/Listing/README.md) 🔖 especially for events
1. Navigation menu ⬇️ handles two level nested pages
1. Animations 💫 on hover, click events
1. [Image assets](/theme/themes/educal/assets/images/) 🍱 included with the theme

## Features requiring Customization 🔧

1. Categorization of pages based on tags using the _categorization menu_ present in the left side of the header. **NOTE:** This feature requires the following API call `/++api++/@vocabularies/plone.app.vocabularies.Keywords?b_start=0` which is by default only available to logged in users.
   ![](/assets/github/category_menu_preview.gif)
1. Footer section links including social handles are available but requires additional customization. Change the code in [Footer.jsx](src/customizations/components/theme/Footer/Footer.jsx) as per the requirements.
   ![](/assets/github/footer_preview.png)
1. The `Try for free` button can be customized in the [Header.jsx](src/customizations/components/theme/Header/Header.jsx) as per the requirements. For example: It can be used to route to `/login` route.
   ![](/assets/github/header_preview.png)

## Community add-ons used 👥 📦

1. [volto-slate](https://github.com/eea/volto-slate)
1. [@kitconcept/volto-blocks-grid](https://github.com/kitconcept/volto-blocks-grid)
1. [@eeacms/volto-tabs-block](https://github.com/eea/volto-tabs-block)
1. [@eeacms/volto-block-divider](https://github.com/eea/volto-block-divider)

## Installation 🚀

1. [Create a new volto project](https://github.com/plone/volto#create-a-volto-project-using-the-generator), if you don't have one.
1. Clone this repository i.e. `volto-educal-theme`, the [Hero Block](https://github.com/collective/volto-educal-hero-block) and the [Pre-footer block](https://github.com/collective/volto-block-banner) in the `src/addons` directory of the volto project.
1. Now we will be linking the cloned repositories:

   1. Add `@plone-collective/volto-educal-theme` as an array member under the `addons` property in the volto project's `package.json`.

   1. Add `src/addons/volto-educal-theme`, `src/addons/volto-block-banner` and `src/addons/volto-educal-hero-block` as array members under the `workspaces` property in the volto project's `package.json`.

   1. Finally, the volto project's `package.json` should include the following lines:

   ```json
     "workspaces": [
       "src/addons/volto-educal-theme",
       "src/addons/volto-block-banner",
       "src/addons/volto-educal-hero-block"
     ],
     "addons": ["@plone-collective/volto-educal-theme"]
   ```

   **REMEMBER:**

   - You just need to add this in your volto project's `package.json` file and not in any of the add-ons `package.json` file.
   - If you are stuck, you can refer the change [here](https://github.com/avimishra18/volto_educal/blob/48328f5551678f26cae02f1bdc6268b2de47ad26/package.json#L40-L47)
   - For a more detailed guide, on how to install an add-on in volto [visit here](https://6.dev-docs.plone.org/volto/addons/index.html#loading-addon-configuration).

1. Change this line in `src/theme.js` of the bootstrapped project.

   ```diff
   - import 'semantic-ui-less/semantic.less';
   + import '@plone-collective/volto-educal-theme/semantic.less';
     import '@plone/volto/../theme/themes/pastanaga/extras/extras.less';
   ```

   You can refer the change [here](https://github.com/avimishra18/volto_educal/blob/main/src/theme.js).

1. [Bootstrap](https://github.com/plone/volto#bootstrap-the-plone-api-backend) the Plone API backend. Alternatively, you can visit the [official documentation](https://docs.plone.org/manage/installing/index.html) for other installation options.
1. Run `yarn start` command to start the volto server! 🍻

## Screenshot 📸

<details>
  <summary> Click to view! </summary>

![image](/assets/github/preview.png)

</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
