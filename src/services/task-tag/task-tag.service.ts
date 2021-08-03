import { Injectable } from '@nestjs/common';
import { CreateTaskTagDTO } from 'src/dto/create-task-tag.dto';
import { UpdateTaskTagDTO } from 'src/dto/update-task-tag.dto';
import { UpdateTaskDTO } from 'src/dto/update-task.dto';
import { TaskTag } from 'src/models/task-tag.entity';
import { TaskTagRepository } from 'src/repositories/task-tag.repository';
import { TaskRepository } from 'src/repositories/task.repository';

@Injectable()
export class TaskTagService {

    constructor(
        private taskTagRepository:TaskTagRepository,
        private taskRepository:TaskRepository
        ){}

    getAllTaskTags(){
        return this.taskTagRepository.find();
    }
        
    async getTaskTagsOfATask(taskId:number){
        let task = await this.taskRepository.findOne({where:{id:taskId},relations:['taskTags']});
        let taskTags = task.taskTags;

        return taskTags;

    }

    createTaskTag(taskTag:CreateTaskTagDTO){
        return this.taskTagRepository.save(taskTag);
    }


    async addTaskTagToATask(taskId:number,taskTag:TaskTag){
        let task = await this.taskRepository.findOne({where:{id:taskId},relations:['taskTags']});
        taskTag = await this.taskTagRepository.findOne(taskTag.id);

        task.taskTags.push(taskTag);

        return this.taskRepository.save(task);
    }


    async updateTaskTag(id:number,updatedTaskTag:UpdateTaskTagDTO){
        
        let originalTaskTag:TaskTag = await this.taskTagRepository.findOne(id);

        updatedTaskTag = {...originalTaskTag,...updatedTaskTag}

        return this.taskTagRepository.save(updatedTaskTag);
    }

    
    async deleteTaskTag(tagId){
        return await this.taskTagRepository.delete(tagId);

    }
}
