export default () => ({
  title: 'Educal Category Teaser',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['teaserIcon', 'title', 'description', 'url'],
    },
  ],
  properties: {
    teaserIcon: {
      title: 'teaserIcon',
      widget: 'attachedimage',
    },
    title: {
      title: 'Heading',
      type: 'string',
    },
    description: {
      title: 'Description',
      type: 'string',
    },
    url: {
      title: 'On Click URL',
      type: 'string',
    },
  },
  required: [],
});
