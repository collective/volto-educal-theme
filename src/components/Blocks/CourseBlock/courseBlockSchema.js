export default () => ({
  title: 'Educal Banner Area Block',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: [
        'courseImage',
        'tag1',
        'tag2',
        'noOfLessons',
        'avgRating',
        'noOfReviews',
        'courseName',
        'authorDisplayPic',
        'authorName',
        'price',
        'discountedPrice',
        'courseUrl',
      ],
    },
  ],
  properties: {
    courseImage: {
      title: 'Course Image',
      widget: 'url',
    },
    tag1: {
      title: 'Tag 1',
      widget: 'string',
    },
    tag2: {
      title: 'Tag 2',
      widget: 'string',
    },
    noOfLessons: {
      title: 'Total lessons',
      widget: 'string',
    },
    avgRating: {
      title: 'Average Rating',
      widget: 'string',
    },
    noOfReviews: {
      title: 'Number of reviews',
      widget: 'string',
    },
    courseName: {
      title: 'Course Name',
      type: 'string',
      defaultValue: 'Put the name of course here!',
    },
    authorDisplayPic: {
      title: 'Author Image',
      widget: 'url',
    },
    authorName: {
      title: 'Author Name',
      type: 'string',
    },
    price: {
      title: 'Price',
      widget: 'string',
    },
    discountedPrice: {
      title: 'Discounted Price',
      widget: 'string',
    },
    courseUrl: {
      title: 'Course URL',
      widget: 'string',
    },
  },
  required: [],
});
