import { Repository, EntityRepository } from 'typeorm';
import {Project} from '../models/project.entity'


@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {}
