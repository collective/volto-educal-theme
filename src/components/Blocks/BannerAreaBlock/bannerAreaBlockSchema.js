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
      widget: 'string',
    },
    headingLine1: {
      title: 'Heading1',
      type: 'string',
      defaultValue: 'Put the heading line 1 here!',
    },
    headingLine2: {
      title: 'Heading2',
      type: 'string',
      defaultValue: 'Put the heading line 2 here!',
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
      widget: 'url',
    },
    backgroundImage: {
      title: 'Background Image',
      widget: 'url',
    },
  },
  required: [],
});
