import { Injectable } from '@nestjs/common';
import { UpdateTaskDTO } from 'src/dto/update-task.dto';
import { Task } from 'src/models/task.entity';
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

    async UpdateTask(updatedTask:UpdateTaskDTO){
        let originalTask:Task = await this.taskRepository.findOne(updatedTask.id);

        let taskToInsert: Task = { ...originalTask, ...updatedTask };
        return await this.taskRepository.save(taskToInsert);
    }

    async softDeleteTask(id:number){
        return await this.taskRepository.softDelete(id);
    }
}
