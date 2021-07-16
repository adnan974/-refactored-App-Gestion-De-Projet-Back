import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TaskService } from 'src/services/task/task.service';

@Controller('tasks')
@ApiTags('tasks')
export class TaskController {

    constructor(private taskService:TaskService){}

    @Get()
    @ApiOperation({
        description:'Get all tasks'
    })
    getTasks(){
        this.taskService.getAllTasks()
        .then((tasks)=>{
            return tasks;
        });
    }


}
