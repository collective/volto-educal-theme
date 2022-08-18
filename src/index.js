import {
  CategoryTeaserEdit,
  CategoryTeaserView,
} from '@plone-collective/volto-educal-theme/components/Blocks/CategoryTeaser';
import categoryTeaserIconSVG from '@plone/volto/icons/freedom.svg';

const applyConfig = (config) => {
  // For multilevel navigation
  config.settings.navDepth = 3;
  config.blocks.blocksConfig.educalCategoryTeaser = {
    id: 'educalCategoryTeaser',
    title: 'Educal Category Teaser',
    icon: categoryTeaserIconSVG,
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
  // Adding teaserBlocks to Grid
  config.blocks.blocksConfig.__grid.gridAllowedBlocks = [
    ...config.blocks.blocksConfig.__grid.gridAllowedBlocks,
    'educalCategoryTeaser',
  ];
  return config;
};

export default applyConfig;
