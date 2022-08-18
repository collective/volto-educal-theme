import React from 'react';
import { BlockDataForm, SidebarPortal } from '@plone/volto/components';
import categoryTeaserSchema from '@plone-collective/volto-educal-theme/components/Blocks/CategoryTeaser/categoryTeaserSchema';

const CategoryTeaserSidebar = (props) => {
  const { data, block, onChangeBlock, selected } = props;
  const schema = categoryTeaserSchema();

  return (
    <SidebarPortal selected={selected}>
      <BlockDataForm
        schema={schema}
        title={schema.title}
        onChangeField={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
        formData={data}
        fieldIndex={data.index}
        block={block}
      />
    </SidebarPortal>
  );
};

export default CategoryTeaserSidebar;
