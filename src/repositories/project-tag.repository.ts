import { ProjectTag } from 'src/models/project-tag.entity';
import { Repository, EntityRepository } from 'typeorm';
import {Project} from '../models/project.entity'


@EntityRepository(ProjectTag)
export class ProjectTagRepository extends Repository<ProjectTag> {}
