import { defineField, defineType } from "sanity";

export default defineType({
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string"
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text"
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image"
        }),
        defineField({
            name: "link",
            title: "Project Link",
            type: "url"
        })
    ]
});