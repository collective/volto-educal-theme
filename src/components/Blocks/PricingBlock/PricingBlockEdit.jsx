import React from 'react';
import PricingBlockView from '@plone-collective/volto-educal-theme/components/Blocks/PricingBlock/PricingBlockView';
import PricingBlockSidebar from '@plone-collective/volto-educal-theme/components/Blocks/PricingBlock/PricingBlockSidebar';

const PricingBlockEdit = (props) => {
  return (
    <>
      <PricingBlockView {...props} mode="edit" />
      <PricingBlockSidebar {...props} />
    </>
  );
};

export default PricingBlockEdit;
