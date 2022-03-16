import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import { userSchema } from './user-schema';
import { conversationsSchema } from './conversations-schema';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([userSchema, conversationsSchema]),
});
