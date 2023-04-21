import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';

export default class Task extends Model {
  static table = 'tasks';
  // @ts-ignore
  @field('title') title;
  // @ts-ignore
  @field('is_completed') isCompleted;
}
