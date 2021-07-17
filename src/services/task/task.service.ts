import { Injectable } from '@nestjs/common';
import { TaskRepository } from 'src/repositories/task.repository';

@Injectable()
export class TaskService {

    constructor(private taskRepository:TaskRepository){}


    async getAllTasks(){
        return await this.taskRepository.find();
    }

    async getTask(id:number){
        return await this.taskRepository.findOne(id);
    }

    async softDeleteTask(id:number){
        return await this.taskRepository.softDelete(id);
    }
}
