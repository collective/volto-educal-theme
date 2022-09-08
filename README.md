<a name="readme-top"></a>

# volto-educal-theme 🎨

<!-- TABLE OF CONTENTS -->
<details>
  <summary> Table of content! </summary>

- [About 💡](#about-)
- [Features ✨](#features-)
- [Features requiring Customization 🔧](#features-requiring-customization-)
- [Community add-ons used 👥 📦](#community-add-ons-used--)
- [Installation 🚀](#installation-)
- [Creating the Front Page 📹](#creating-the-front-page-)
- [Screenshot 📸](#screenshot-)

</details>

## About 💡

- A [volto](https://plone.org/what-is-plone/volto) theme [add-on](https://6.dev-docs.plone.org/volto/addons/index.html) based on [educal theme](https://themeforest.net/item/educal-online-learning-and-education-vue-js-template/37099827).
- This repository is the work product of [Google Summer of Code](https://summerofcode.withgoogle.com/) 2022 🌞 project - [Create new Volto theme](https://summerofcode.withgoogle.com/programs/2022/projects/M2LAPzxL) developed for the [Plone Foundation](https://summerofcode.withgoogle.com/programs/2022/organizations/plone-foundation) 🔵 under the mentorship 🧑🏻‍🏫 of [@nileshgulia1](https://github.com/nileshgulia1), [@tkimnguyen](https://github.com/tkimnguyen) & [@jackahl](https://github.com/jackahl).

![](/assets/github/preview.gif)

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

1. Categorization of pages based on tags using the _categorization menu_ present in the left side of the header.

   **_NOTE:_** This feature requires the API call to Keywords [vocabulary](https://plonerestapi.readthedocs.io/en/latest/vocabularies.html) `/++api++/@vocabularies/plone.app.vocabularies.Keywords?b_start=0` which is by default only available to authenticated users. Currently, this menu is only visible when the user is authenticated. You can make changes in [Header.jsx](src/customizations/components/theme/Header/Header.jsx) as per the requirements.

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
1. Add the following packages to the `mrs.developer.json` file of your volto project.

   ```json
   {
     "volto-educal-hero-block": {
       "url": "git@github.com:collective/volto-educal-hero-block.git",
       "https": "https://github.com/collective/volto-educal-hero-block.git",
       "package": "@plone-collective/volto-educal-hero-block",
       "branch": "main",
       "path": "src"
     },
     "volto-block-banner": {
       "url": "git@github.com:collective/volto-block-banner.git",
       "https": "https://github.com/collective/volto-block-banner.git",
       "package": "@plone-collective/volto-block-banner",
       "branch": "main",
       "path": "src"
     },
     "volto-educal-theme": {
       "url": "git@github.com:collective/volto-educal-theme.git",
       "https": "https://github.com/collective/volto-educal-theme.git",
       "package": "@plone-collective/volto-educal-theme",
       "branch": "main",
       "path": "src"
     }
   }
   ```

1. Now link the add-on in the volto project:

   1. Make sure the `private` field is set to `true` in the volto project's `package.json`. As [yarn workspaces can only be enabled in private projects](https://classic.yarnpkg.com/lang/en/docs/workspaces/#toc-how-to-use-it).

   1. Add `src/addons/*` as array members under the `workspaces` property in the volto project's `package.json`.

   1. Add `@plone-collective/volto-educal-theme` as an array member under the `addons` property in the volto project's `package.json`.

   Finally, the volto project's `package.json` should include the following lines:

   ```json
   {
     "private": true,
     "workspaces": ["src/addons/*"],
     "addons": ["@plone-collective/volto-educal-theme"]
   }
   ```

   **REMEMBER:**

   - You just need to add this in your volto project's `package.json` file and not in any of the add-ons `package.json` file.
   - For a more detailed guide, on how to install an add-on in volto [visit here](https://6.dev-docs.plone.org/volto/addons/index.html#loading-addon-configuration).

1. Change this line in `src/theme.js` of the volto project.

   ```diff
   - import 'semantic-ui-less/semantic.less';
   + import '@plone-collective/volto-educal-theme/semantic.less';
     import '@plone/volto/../theme/themes/pastanaga/extras/extras.less';
   ```

   You can refer the change [here](https://github.com/avimishra18/volto_educal/blob/main/src/theme.js).

1. [Bootstrap](https://github.com/plone/volto#bootstrap-the-plone-api-backend) the Plone API backend. Alternatively, you can visit the [official documentation](https://docs.plone.org/manage/installing/index.html) for other installation options.
1. Run `yarn` to install the node modules. 📦
1. Run `yarn start` command to start the volto server! 🍻

## Creating the Front Page 📹

<details>
  <summary> Click to watch video! </summary>

[![IMAGE ALT TEXT](/assets/github/video_thumbnail.png)](https://www.youtube.com/watch?v=jxbq_OHJUIo 'Creating the Front Page | volto-educal-theme')

</details>

## Screenshot 📸

<details>
  <summary> Click to view! </summary>

![image](/assets/github/preview.png)

</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
