import React from 'react';

const CourseBlockTag = ({ tag, secondary }) => {
  if (!tag || tag === '') {
    return null;
  }
  if (!secondary) {
    return <div className="courseBlockTag courseBlockTag1">{tag}</div>;
  }
  return <div className="courseBlockTag courseBlockTag2">{tag}</div>;
};

export default CourseBlockTag;
