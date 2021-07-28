import { TaskTag } from 'src/models/task-tag.entity';
import { Repository, EntityRepository } from 'typeorm';


@EntityRepository(TaskTag)
export class TaskTagRepository extends Repository<TaskTag> {}
