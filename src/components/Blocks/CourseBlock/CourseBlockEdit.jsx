import React from 'react';
import CourseBlockView from '@plone-collective/volto-educal-theme/components/Blocks/CourseBlock/CourseBlockView';
import CourseBlockSidebar from '@plone-collective/volto-educal-theme/components/Blocks/CourseBlock/CourseBlockSidebar';

const BannerAreaBlockEdit = (props) => {
  return (
    <>
      <CourseBlockView {...props} mode="edit" />
      <CourseBlockSidebar {...props} />
    </>
  );
};

export default BannerAreaBlockEdit;
