import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import user from './user'
import messages from './messages'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, user, messages],
}
