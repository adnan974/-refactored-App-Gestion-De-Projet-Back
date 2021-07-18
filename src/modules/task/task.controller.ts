import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UpdateTaskDTO } from 'src/dto/update-task.dto';
import { TaskService } from 'src/services/task/task.service';

@Controller('tasks')
@ApiTags('tasks')
export class TaskController {

    constructor(private taskService: TaskService) { }

    // TODO ajout pagination + DTO
    @Get()
    @ApiOperation({
        description: 'Get all tasks'
    })
    getAllTasks() {
        return this.taskService.getAllTasks()
            .then((tasks) => {
                return tasks;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    @Get('/:id')
    @ApiOperation({
        summary: 'get one task by its id'
    })
    @ApiParam({
        name: 'id',
        type: Number,
        required: true
    })
    getTask(@Param('id') id: number) {
        return this.taskService.getTask(id)
            .then((task) => {
                return task;
            })
            .catch((err) => {
                console.log(err);
            })
    }

    @Patch()
    @ApiOperation({
        description: 'update a task'
    })
    updateTask(@Body() task: UpdateTaskDTO) {
        return this.taskService.UpdateTask(task)
            .then((task) => {
                return task;
            })
            .catch((err) => {
                console.log(err);
            })

    }

    @Delete('/:id')
    @ApiOperation({
        description: 'Delete a task by its id'
    })
    @ApiParam({
        name: 'id',
        type: Number,
        required: true
    })
    softDeleteTask(@Param('id') id: number) {
        this.taskService.softDeleteTask(id);
    }




}
