import React from 'react';
import { BlockDataForm, SidebarPortal } from '@plone/volto/components';
import courseBlockSchema from '@plone-collective/volto-educal-theme/components/Blocks/CourseBlock/courseBlockSchema';

const CourseBlockSidebar = (props) => {
  const { data, block, onChangeBlock, selected } = props;
  const schema = courseBlockSchema();

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

export default CourseBlockSidebar;
