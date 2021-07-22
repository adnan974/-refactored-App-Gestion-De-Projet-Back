import { Injectable } from "@nestjs/common";
import { TaskRepository } from "src/repositories/task.repository";
import { UserRepostory } from "src/repositories/user.repository";

@Injectable()
export class TaskAuthorization {

    constructor(private userRepository:UserRepostory,private taskReposiory:TaskRepository){}

    async isTaskOwner(userId:number,taskId:number):Promise<boolean>{

        let task = await this.taskReposiory.findOne({where:{id:taskId},relations:['createdBy']})
        let user = await this.userRepository.findOne(userId);
        if(task.createdBy.id === user.id) return true;
        return false;
    }
}
