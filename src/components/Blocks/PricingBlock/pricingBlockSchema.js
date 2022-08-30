export default () => ({
  title: 'Educal Pricing Block',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: [
        'title',
        'description',
        'price1',
        'price2',
        'point1',
        'point2',
        'point3',
        'point4',
        'showActionButton',
        'actionButtonText',
        'actionButtonUrl',
        'tag',
      ],
    },
  ],
  properties: {
    title: {
      title: 'Title',
      type: 'string',
    },
    description: {
      title: 'Description',
      type: 'string',
    },
    price1: {
      title: 'Price Big Text',
      type: 'string',
    },
    price2: {
      title: 'Price Small Text',
      type: 'string',
    },
    point1: {
      title: 'Point 1',
      type: 'string',
    },
    point2: {
      title: 'Point 2',
      type: 'string',
    },
    point3: {
      title: 'Point 3',
      type: 'string',
    },
    point4: {
      title: 'Point 4',
      type: 'string',
    },
    showActionButton: {
      title: 'Enable button',
      type: 'boolean',
    },
    actionButtonText: {
      title: 'Button text',
      type: 'string',
    },
    actionButtonUrl: {
      title: 'Button redirect url',
      type: 'string',
    },
    tag: {
      title: 'Tag',
      type: 'string',
    },
  },
  required: [],
});
