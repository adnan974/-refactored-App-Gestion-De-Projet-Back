import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/models/project.entity';
import { ProjectRepository } from '../../repositories/project.repository';

@Injectable()
export class ProjectService {

    constructor(
        @InjectRepository(ProjectRepository)
        private projectRepository:ProjectRepository
        ){}

    async getAll():Promise<Project[]>{
        return await this.projectRepository.find();
    }
    
}
