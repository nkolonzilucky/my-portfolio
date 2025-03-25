import { defineField, defineType } from "sanity";

export default defineType({
    name: "user",
    title: "User Details",
    type: "document",
    fields: [
        defineField({
            name: "names",
            title: "Names",
            type: "string"
        }),
        defineField({
            name: "role",
            title: "Role",
            type: "string"
        }),
        defineField({
            name: "image",
            title: "Profile picture",
            type: "image"
        }),
        defineField({
            name: "about",
            title: "About the user",
            type: "text"
        })
    ]
});