import React from 'react';
import CategoryTeaserView from '@plone-collective/volto-educal-theme/components/Blocks/CategoryTeaser/CategoryTeaserView';
import CategoryTeaserSidebar from '@plone-collective/volto-educal-theme/components/Blocks/CategoryTeaser/CategoryTeaserSidebar';

const CategoryTeaserEdit = (props) => {
  return (
    <>
      <CategoryTeaserView {...props} mode="edit" />
      <CategoryTeaserSidebar {...props} />
    </>
  );
};

export default CategoryTeaserEdit;
