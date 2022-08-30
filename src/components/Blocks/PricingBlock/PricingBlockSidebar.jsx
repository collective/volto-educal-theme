import React from 'react';
import { BlockDataForm, SidebarPortal } from '@plone/volto/components';
import pricingBlockSchema from '@plone-collective/volto-educal-theme/components/Blocks/PricingBlock/pricingBlockSchema';

const PricingBlockSidebar = (props) => {
  const { data, block, onChangeBlock, selected } = props;
  const schema = pricingBlockSchema();

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

export default PricingBlockSidebar;
