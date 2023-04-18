import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './schema';
import Task from './taskModel';

const adapter = new SQLiteAdapter({
  dbName: 'MyDatabase',
  schema,
});

export const database = new Database({
  adapter,
  modelClasses: [Task],
});
