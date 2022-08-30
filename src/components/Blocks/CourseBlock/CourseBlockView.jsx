import React from 'react';
import { Link } from 'react-router-dom';
import { flattenToAppURL, isInternalURL } from '@plone/volto/helpers';
import { Image } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faBook,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import '@plone-collective/volto-educal-theme/components/Blocks/CourseBlock/courseBlock.less';

const CourseBlockView = ({ data }) => {
  const {
    courseImage,
    tag1,
    tag2,
    noOfLessons,
    avgRating,
    noOfReviews,
    courseName,
    authorDisplayPic,
    authorName,
    price,
    discountedPrice,
    courseUrl,
  } = data;

  const urlHandler = (url) =>
    isInternalURL(url) ? `${flattenToAppURL(url)}/@@images/image` : url;

  let priceOld,
    priceMain = price;

  if (discountedPrice) {
    priceOld = price;
    priceMain = discountedPrice;
  }

  return (
    <div className="courseBlockRoot">
      <div className="courseBlockTop">
        <Image src={urlHandler(courseImage)} className="courseBlockImage" />
        <div className="courseTagDiv">
          <div className="courseBlockTag courseBlockTag1">{tag1}</div>{' '}
          <div className="courseBlockTag courseBlockTag2">{tag2}</div>
        </div>
      </div>
      <div className="courseBlockMiddle">
        <div className="courseBlockOverview">
          <div className="courseBlockTotalLesson">
            <FontAwesomeIcon icon={faBook} color="#53545b" />
            <div className="courseBlockLessonText">
              {`${noOfLessons} lessons`}
            </div>
          </div>
          <div className="courseBlockRating">
            <FontAwesomeIcon icon={faStar} color="#ff9415" />
            <div className="courseBlockRatingText">{`${avgRating} (${noOfReviews})`}</div>
          </div>
        </div>
        <div className="courseBlockName">{courseName}</div>
        <div className="courseBlockAuthor">
          <Image
            src={urlHandler(authorDisplayPic)}
            className="courseBlockAuthorImage"
          />
          <div className="courseBlockAuthorName">{authorName}</div>
        </div>
      </div>
      <div className="courseBlockBottom">
        <div className="courseBlockPriceDiv">
          {priceOld ? (
            <span className="courseBlockPriceText2">{priceOld}</span>
          ) : null}
          <span className="courseBlockPriceText1">{priceMain}</span>
        </div>
        <div className="courseBlockBottomRight">
          <Link className="courseBlockUrlText" to={{ pathname: courseUrl }}>
            Know Details
          </Link>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="courseBlockUrlArrow"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseBlockView;
