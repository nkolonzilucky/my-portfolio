import { defineField, defineType } from "sanity";

export default defineType({
  name: "response",
  title: "Response",
  type: "document",
  fields: [
    defineField({
      name: "message",
      title: "Message",
      type: "reference",
      to: {type: "message"}
    }),
    defineField({
      name: "customer_email",
      title: "Customer Email",
      type: "string",
    }),
    defineField({
      name: "response",
      title: "Response",
      type: "text",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: new Date().toISOString(),
    }),
  ],
});
