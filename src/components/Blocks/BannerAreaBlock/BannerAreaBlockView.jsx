import React from 'react';
import { flattenToAppURL, isInternalURL } from '@plone/volto/helpers';
import { Button, Image } from 'semantic-ui-react';

import '@plone-collective/volto-educal-theme/components/Blocks/BannerAreaBlock/bannerAreaBlock.less';

const BannerAreaBlockView = ({ data, mode }) => {
  const {
    tag,
    headingLine1,
    headingLine2,
    showActionButton,
    actionButtonText,
    actionButtonUrl,
    foregroundImage,
    backgroundImage,
  } = data;

  const urlHandler = (url) =>
    isInternalURL(url) ? `${flattenToAppURL(url)}/@@images/image` : url;

  return (
    <div
      className="bannerAreaRoot"
      style={{ backgroundImage: `url("${urlHandler(backgroundImage)}")` }}
    >
      <div className="bannerAreaLeft">
        <div className="bannerAreaTag">{tag}</div>
        <div className="bannerAreaHeading">
          {headingLine1}
          <br />
          {headingLine2}
        </div>
        {showActionButton ? (
          <Button
            primary
            className="bannerAreaCTA"
            content={actionButtonText}
            as="a"
            href={actionButtonUrl}
          />
        ) : null}
      </div>
      <div className="bannerAreaRight">
        <Image
          src={urlHandler(foregroundImage)}
          className="bannerAreaRightImage"
        />
      </div>
    </div>
  );
};

export default BannerAreaBlockView;
