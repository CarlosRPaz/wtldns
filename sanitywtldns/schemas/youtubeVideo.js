export default {
    name: "youtubeVideo",
    title: "YouTube Video",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title for video on website",
            type: "string"
        },
        {
            name: "videoURL",
            title: `YouTube Embed URL (share > embed > copy the URL in src="<this URL here>"`,
            type: "string"
        },
    ],

    preview: {
        select: {
            title: "title",
        },
        prepare(selection) {
            const {author} = selection;
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`
            });
        }
    }
};
