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
}`);

export const MESSAGE_QUERY = defineQuery(`*[_type == "message"] | order(_createdAt desc){
  _id,
  name,
  email,
  message
}`);

export const VERIFY_DUPLICATE_USER_SUBMISSIONS = defineQuery(`*[_type == "message"]{
  name,
  email
}`);