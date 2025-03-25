import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`*[_type == "project"]{
  title, 
  description,
  link,
  image
}`);

export const USER_QUERY = defineQuery(`*[_type == "user"][0]{
  names,
  role,
  image,
  about
}`)