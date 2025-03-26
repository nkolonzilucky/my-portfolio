import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env';
import  ImageUrlBuilder  from '@sanity/image-url';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.SANITY_WRITE_TOKEN,
})

const builder = ImageUrlBuilder(client);

export function urlFor(source:any) {
  return builder.image(source);
}
