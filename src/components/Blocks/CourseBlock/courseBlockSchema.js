export default () => ({
  title: 'Educal Course Block',
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
      widget: 'attachedimage',
    },
    tag1: {
      title: 'Tag 1',
      type: 'string',
    },
    tag2: {
      title: 'Tag 2',
      type: 'string',
    },
    noOfLessons: {
      title: 'Total lessons',
      type: 'string',
    },
    avgRating: {
      title: 'Average Rating',
      type: 'string',
    },
    noOfReviews: {
      title: 'Number of reviews',
      type: 'string',
    },
    courseName: {
      title: 'Course Name',
      type: 'string',
    },
    authorDisplayPic: {
      title: 'Author Image',
      widget: 'attachedimage',
    },
    authorName: {
      title: 'Author Name',
      type: 'string',
    },
    price: {
      title: 'Price',
      type: 'string',
    },
    discountedPrice: {
      title: 'Discounted Price',
      type: 'string',
    },
    courseUrl: {
      title: 'Course URL',
      type: 'string',
    },
  },
  required: [],
});
