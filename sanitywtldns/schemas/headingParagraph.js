export default {
    name: "headingParagraph",
    title: "Heading Paragraph",
    type: "document",
    fields: [
        {
            name: "heading",
            title: `Heading (larger text)`,
            type: "string"
        },
        {
            name: "paragraph",
            title: `Paragraph`,
            type: "string"
        },
    ],

    preview: {
        select: {
            title: "heading",
        },
        prepare(selection) {
            const {author} = selection;
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`
            });
        }
    }
};
