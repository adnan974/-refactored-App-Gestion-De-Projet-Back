import { Injectable } from "@nestjs/common";
import { ProjectRepository } from "src/repositories/project.repository";
import { UserRepostory } from "src/repositories/user.repository";

// #Action_Based_Authorization(Systeme perso) 3:
// Ce service va vérifier les authorization au nveau des projets.
// Ce service a une méthode qui vérifie simplement si le projet appartient à l'id du user
// qu'on a passé en paramètre
@Injectable()
export class ProjectAuthorization {

    constructor(private userRepository:UserRepostory,private projectRepository:ProjectRepository){}

    async isProjectOwner(userId:number,projectId:number):Promise<boolean>{

        let project = await this.projectRepository.findOne({where:{id:projectId},relations:['createdBy']})
        let user = await this.userRepository.findOne(userId);
        if(project.createdBy.id === user.id) return true;
        return false;
    }
}
