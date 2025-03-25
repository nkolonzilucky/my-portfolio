import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`*[_type == "project"]{
  title, 
  description,
  link,
  image
}`);