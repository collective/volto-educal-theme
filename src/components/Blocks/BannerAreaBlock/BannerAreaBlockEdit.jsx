import React from 'react';
import BannerAreaBlockView from '@plone-collective/volto-educal-theme/components/Blocks/BannerAreaBlock/BannerAreaBlockView';
import BannerAreaBlockSidebar from '@plone-collective/volto-educal-theme/components/Blocks/BannerAreaBlock/BannerAreaBlockSidebar';

const BannerAreaBlockEdit = (props) => {
  return (
    <>
      <BannerAreaBlockView {...props} mode="edit" />
      <BannerAreaBlockSidebar {...props} />
    </>
  );
};

export default BannerAreaBlockEdit;
