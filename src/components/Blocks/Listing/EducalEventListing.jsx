import React from 'react';
import PropTypes from 'prop-types';
import { ConditionalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { isInternalURL } from '@plone/volto/helpers/Url/Url';
import '@plone-collective/volto-educal-theme/components/Blocks/Listing/educalEventListing.less';

const EducalEventListing = ({ items, linkTitle, linkHref, isEditMode }) => {
  let link = null;
  let href = linkHref?.[0]?.['@id'] || '';

  if (isInternalURL(href)) {
    link = (
      <ConditionalLink to={flattenToAppURL(href)} condition={!isEditMode}>
        {linkTitle || href}
      </ConditionalLink>
    );
  } else if (href) {
    link = <a href={href}>{linkTitle || href}</a>;
  }

  const getEventDetails = (item) => {
    let start = '',
      end = '',
      location = '';

    if (item.start) {
      const parsedDate = new Date(Date.parse(item.start));
      start = `${parsedDate.toLocaleString('default', {
        month: 'long',
      })} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}  |  ${parsedDate.toLocaleString(
        'en-US',
        { hour: 'numeric', minute: 'numeric', hour12: true },
      )}`;
    }

    if (item.end) {
      const parsedDate = new Date(Date.parse(item.end));
      end = ` - ${parsedDate.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })}`;
    }

    if (item.location) {
      location = `  |  ${item.location}`;
    }

    return start + end + location;
  };

  return (
    <>
      <div className="items">
        {items.map((item) => (
          <div className="educalEventListingRoot" key={item['@id']}>
            <div className="educalEventListingLeft">
              <span className="educalEventListingDetails">
                {getEventDetails(item)}
              </span>
              <span className="educalEventListingTitle">
                {item.title ? item.title : item.id}
              </span>
            </div>
            <div className="educalEventListingRight">
              <ConditionalLink item={item} condition={!isEditMode}>
                View More
              </ConditionalLink>
            </div>
          </div>
        ))}
      </div>

      {link && <div className="footer">{link}</div>}
    </>
  );
};

EducalEventListing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
};

export default EducalEventListing;
