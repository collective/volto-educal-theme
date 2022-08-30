import React from 'react';
import { Button } from 'semantic-ui-react';

import PricingBlockPoint from '@plone-collective/volto-educal-theme/components/Blocks/PricingBlock/PricingBlockPoint';
import '@plone-collective/volto-educal-theme/components/Blocks/PricingBlock/pricingBlock.less';

const PricingBlockView = ({ data }) => {
  const {
    title,
    description,
    price1,
    price2,
    point1,
    point2,
    point3,
    point4,
    showActionButton,
    actionButtonText,
    actionButtonUrl,
    tag,
  } = data;

  return (
    <div className="pricingAreaRoot">
      <div className="pricingAreaTitle">{title}</div>
      <div className="pricingAreaDescription">{description}</div>
      <div className="pricingAreaPrice">
        <span className="priceAreaPriceBold">{price1}</span>
        {price2}
      </div>
      {tag && tag !== '' ? <div className="pricingAreaTag">{tag}</div> : null}
      <PricingBlockPoint point={point1} />
      <PricingBlockPoint point={point2} />
      <PricingBlockPoint point={point3} />
      <PricingBlockPoint point={point4} />
      {showActionButton ? (
        <Button
          primary
          className="priceAreaCTA"
          content={actionButtonText}
          as="a"
          href={actionButtonUrl}
        />
      ) : null}
    </div>
  );
};

export default PricingBlockView;
