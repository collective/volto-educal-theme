import {
  CategoryTeaserEdit,
  CategoryTeaserView,
} from '@plone-collective/volto-educal-theme/components/Blocks/CategoryTeaser';
import {
  BannerAreaBlockEdit,
  BannerAreaBlockView,
} from '@plone-collective/volto-educal-theme/components/Blocks/BannerAreaBlock';

import categoryTeaserIcon from '@plone/volto/icons/freedom.svg';
import bannerAreaBlockIcon from '@plone/volto/icons/content-existing.svg';

import '@plone-collective/volto-educal-theme/slate-inlineStyles.less';
import '@plone-collective/volto-educal-theme/tabStyles.less';

const applyConfig = (config) => {
  // For multilevel navigation
  config.settings.navDepth = 3;
  config.blocks.blocksConfig.educalCategoryTeaser = {
    id: 'educalCategoryTeaser',
    title: 'Educal Category Teaser',
    icon: categoryTeaserIcon,
    group: 'common',
    view: CategoryTeaserView,
    edit: CategoryTeaserEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    enableStyling: true,
    security: {
      addPermission: [],
      view: [],
    },
  };
  config.blocks.blocksConfig.educalBannerAreaBlock = {
    id: 'educalBannerAreaBlock',
    title: 'Educal Banner Area Block',
    icon: bannerAreaBlockIcon,
    group: 'common',
    view: BannerAreaBlockView,
    edit: BannerAreaBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    enableStyling: true,
    security: {
      addPermission: [],
      view: [],
    },
  };
  // Adding teaserBlocks to Grid
  config.blocks.blocksConfig.__grid.gridAllowedBlocks = [
    ...config.blocks.blocksConfig.__grid.gridAllowedBlocks,
    'slate',
    'educalCategoryTeaser',
    'educalBannerAreaBlock',
  ];
  // Slate Config
  config.settings.slate.styleMenu.inlineStyles = [
    ...(config.settings.slate.styleMenu?.inlineStyles || []),
    {
      cssClass: 'educalSectionHeading',
      label: 'Educal Section Heading',
    },
    {
      cssClass: 'educalRightLink',
      label: 'Educal Right Text',
    },
  ];
  return config;
};

export default applyConfig;
