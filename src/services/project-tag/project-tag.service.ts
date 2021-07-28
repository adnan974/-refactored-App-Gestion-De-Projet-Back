import { Injectable } from '@nestjs/common';
import { CreateProjectTagDTO } from 'src/dto/create-project-tag.dto';
import { CreateProjectDTO } from 'src/dto/create-project.dto';
import { UpdateProjectTagDTO } from 'src/dto/update-project-tag.dto';
import { UpdateProjectDTO } from 'src/dto/update-project.dto';
import { ProjectTag } from 'src/models/project-tag.entity';
import { ProjectTagRepository } from 'src/repositories/project-tag.repository';
import { ProjectRepository } from 'src/repositories/project.repository';

@Injectable()
export class ProjectTagService {

    constructor(
        private projectTagRepository:ProjectTagRepository,
        private projectRepository:ProjectRepository
        ){}

    getAllProjectTags(){
        return this.projectTagRepository.find();
    }
        
    async getProjectTagsOfAProject(projectId:number){
        let project = await this.projectRepository.findOne({where:{id:projectId},relations:['projectTags']});
        let projectTags = project.projectTags;

        return projectTags;

    }

    createProjectTag(projectTag:CreateProjectTagDTO){
        return this.projectTagRepository.save(projectTag);
    }


    async addProjectTagToAProject(projectId:number,projectTags:ProjectTag){
        let project = await this.projectRepository.findOne({where:{id:projectId},relations:['projectTags']});
        let projectTag:ProjectTag = await this.projectTagRepository.findOne(projectTags.id);

        project.projectTags.push(projectTag);

        return this.projectRepository.save(project);
    }


    async updateProjectTag(updatedProjectTag:UpdateProjectTagDTO){
        
        let originalProjectTag:ProjectTag = await this.projectTagRepository.findOne(updatedProjectTag.id);

        updatedProjectTag = {...originalProjectTag,...updatedProjectTag}

        return this.projectTagRepository.save(updatedProjectTag);
    }

    
    async deleteProjectTag(tagId){
        return await this.projectTagRepository.delete(tagId);

    }
}
