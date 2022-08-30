export default () => ({
  title: 'Educal Banner Area Block',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: [
        'tag',
        'headingLine1',
        'headingLine2',
        'showActionButton',
        'actionButtonText',
        'actionButtonUrl',
        'foregroundImage',
        'backgroundImage',
      ],
    },
  ],
  properties: {
    tag: {
      title: 'tag',
      type: 'string',
    },
    headingLine1: {
      title: 'Heading1',
      type: 'string',
    },
    headingLine2: {
      title: 'Heading2',
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
    foregroundImage: {
      title: 'Foreground Image',
      widget: 'attachedimage',
    },
    backgroundImage: {
      title: 'Background Image',
      widget: 'attachedimage',
    },
  },
  required: [],
});
