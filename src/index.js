import {
  BannerAreaBlockEdit,
  BannerAreaBlockView,
} from '@plone-collective/volto-educal-theme/components/Blocks/BannerAreaBlock';
import {
  CategoryTeaserEdit,
  CategoryTeaserView,
} from '@plone-collective/volto-educal-theme/components/Blocks/CategoryTeaser';
import {
  CourseBlockEdit,
  CourseBlockView,
} from '@plone-collective/volto-educal-theme/components/Blocks/CourseBlock';
import EducalEventListing from '@plone-collective/volto-educal-theme/components/Blocks/Listing/EducalEventListing';

import categoryTeaserIcon from '@plone/volto/icons/freedom.svg';
import bannerAreaBlockIcon from '@plone/volto/icons/content-existing.svg';
import courseBlockIcon from '@plone/volto/icons/content-existing.svg';

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
  config.blocks.blocksConfig.educalCourseBlock = {
    id: 'educalCourseBlock',
    title: 'Educal Course Block',
    icon: courseBlockIcon,
    group: 'common',
    view: CourseBlockView,
    edit: CourseBlockEdit,
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
    'educalBannerAreaBlock',
    'educalCategoryTeaser',
    'educalCourseBlock',
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
  // Add event listing
  config.blocks.blocksConfig.listing.variations = [
    ...config.blocks.blocksConfig.listing.variations,
    {
      id: 'educalEvent',
      title: 'Educal Events',
      template: EducalEventListing,
    },
  ];
  return config;
};

export default applyConfig;
