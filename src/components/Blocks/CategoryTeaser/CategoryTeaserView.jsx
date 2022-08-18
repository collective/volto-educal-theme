import React from 'react';
import { Link } from 'react-router-dom';
import { flattenToAppURL, isInternalURL } from '@plone/volto/helpers';
import { Image } from 'semantic-ui-react';

import '@plone-collective/volto-educal-theme/components/Blocks/CategoryTeaser/categoryTeaser.less';

const CategoryTeaserView = ({ data, mode }) => {
  const { teaserIcon, title, description, url } = data;

  const urlHandler = (url) =>
    isInternalURL(url) ? `${flattenToAppURL(url)}/@@images/image` : url;

  const renderContent = () => (
    <>
      <div className="categoryTeaserLeft">
        <Image src={urlHandler(teaserIcon)} className="categoryTeaserIcon" />
      </div>
      <div className="categoryTeaserRight">
        <div className="categoryTeaserTitle">{title}</div>
        <p className="categoryTeaserDescription">{description}</p>
      </div>
    </>
  );

  return mode === 'edit' ? (
    <div className="categoryTeaserRoot">{renderContent()}</div>
  ) : (
    <Link className="categoryTeaserRoot" to={{ pathname: url }}>
      {renderContent()}
    </Link>
  );
};

export default CategoryTeaserView;
