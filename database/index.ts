import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from '../schemas';
import Task from '../models/taskModel';

const adapter = new SQLiteAdapter({
  dbName: 'MyDatabase',
  schema,
});

export const database = new Database({
  adapter,
  modelClasses: [Task],
});
