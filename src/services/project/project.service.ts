import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetProjectDTO } from 'src/dto/get-project.dto';
import { UpdateProjectDTO } from 'src/dto/update-project.dto';
import { Project } from 'src/models/project.entity';
import { ProjectRepository } from '../../repositories/project.repository';

@Injectable()
export class ProjectService {

    constructor(
        @InjectRepository(ProjectRepository)
        private projectRepository: ProjectRepository
    ) { }

    async getAllProjects(): Promise<GetProjectDTO[]> {
        return await this.projectRepository.find();
    }

    async getProject(id: number) {
        return await this.projectRepository.findOne(id);
    }

    async updateProject(updatedProject: UpdateProjectDTO) {
        let originalProject: Project = await this.projectRepository.findOne(updatedProject.id);

        let projectToInsert: Project = { ...originalProject, ...updatedProject };
        return await this.projectRepository.save(projectToInsert);
    }

    async softDeleteProject(id: number) {
        return await this.projectRepository.softDelete(id);
    }



}
