import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import user from './user'
import message from './message'
import response from './response'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, user, message, response],
}
