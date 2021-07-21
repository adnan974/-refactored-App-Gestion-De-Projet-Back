import { Injectable } from "@nestjs/common";
import { ProjectRepository } from "src/repositories/project.repository";
import { UserRepostory } from "src/repositories/user.repository";

@Injectable()
export class ProjectAuthorization {

    constructor(private userRepository:UserRepostory,private projectRepository:ProjectRepository){}

    async isProjectOwner(userId,projectId):Promise<boolean>{

        let project = await this.projectRepository.findOne({where:{id:projectId},relations:['createdBy']})
        let user = await this.userRepository.findOne(userId);
        if(project.createdBy.id === user.id) return true;
        return false;
    }
}
