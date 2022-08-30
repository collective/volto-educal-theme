import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const PricingBlockPoint = ({ point }) => {
  if (!point || point === '') {
    return null;
  }
  return (
    <div className="pricingAreaPoint">
      <FontAwesomeIcon icon={faCircleCheck} className="pricingAreaCircleIcon" />
      <span className="pricingAreaText">{point}</span>
    </div>
  );
};

export default PricingBlockPoint;
