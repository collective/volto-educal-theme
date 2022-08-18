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
      widget: 'url',
    },
    title: {
      title: 'Heading',
      type: 'string',
      defaultValue: 'Put the title here!',
    },
    description: {
      title: 'Description',
      type: 'string',
      defaultValue: 'Put the description here!',
    },
    url: {
      title: 'On Click URL',
      type: 'url',
    },
  },
  required: [],
});
