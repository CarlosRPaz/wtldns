export default {
    name: "featBook",
    title: "Featured Book",
    type: "document",
    fields: [
        {
            name: "title",
            title: `Website section title (e.g. "Featured", "Recent", etc.)`,
            type: "string"
        },
        {
            name: "author",
            title: "Author",
            type: "reference",
            to: {type: "author"}
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "copiesSold",
            title: "Copies Sold",
            type: "string"
        },
        {
            name: "bookTitle",
            title: "Book Title",
            type: "string"
        },
        {
            name: "amazonURL",
            title: "Amazon URL",
            type: "string"
        },
    ],

    preview: {
        select: {
            title: "bookTitle",
            media: "mainImage",
        },
        prepare(selection) {
            const {author} = selection;
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`
            });
        }
    }
};
