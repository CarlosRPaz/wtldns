export default {
  name: "fanImage",
  title: "Fan Image",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ],

  preview: {
    select: {
      title: "name",
      media: "mainImage"
    },
    prepare(selection) {
      const {author} = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      });
    }
  }
};
