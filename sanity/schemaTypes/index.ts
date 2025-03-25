import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import user from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, user],
}
