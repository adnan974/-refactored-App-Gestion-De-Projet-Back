import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateTaskDTO } from 'src/dto/create-task.dto';
import { UpdateTaskDTO } from 'src/dto/update-task.dto';
import { IsAdminGuard } from 'src/guards/is-admin.guard';
import { IsTaskOwnerOrIsAdminGuard } from 'src/guards/is-task-owner-or-is-admin.guard';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { TaskService } from 'src/services/task/task.service';

@UseGuards(JwtAuthGuard)
@Controller('tasks')
@ApiBearerAuth()
@ApiTags('tasks')
export class TaskController {

    constructor(private taskService: TaskService) { }

    // TODO ajout pagination + DTO
    @UseGuards(IsAdminGuard)
    @Get()
    
    @ApiOperation({
        summary: 'Get all tasks'
    })
    getAllTasks() {
        return this.taskService.getAllTasks()
            .then((tasks) => {
                return tasks;
            })
            .catch((err) => {
                console.log(err);
                throw new BadRequestException();
            });
    }

    @UseGuards(IsTaskOwnerOrIsAdminGuard)
    @Get('/:id')
    
    @ApiOperation({
        summary: 'get one task by its id'
    })
    @ApiParam({
        name: 'id',
        type: Number,
        required: true
    })
    getTask(@Param('id',ParseIntPipe) id: number) {
        return this.taskService.getTask(id)
            .then((task) => {
                return task;
            })
            .catch((err) => {
                console.log(err);
                throw new BadRequestException();
            })
    }

    @Post()
    @ApiOperation({
        summary:'Create a new task'
    })
    createTask(@Body() task:CreateTaskDTO){
        return this.taskService.createTask(task)
        .then((task)=>{
            return task;
        })
        .catch((err)=>{
            console.log(err);
            throw new BadRequestException();
        })
    }

    @UseGuards(IsTaskOwnerOrIsAdminGuard)
    @Patch()
    @ApiOperation({
        summary: 'update a task'
    })
    updateTask(@Body() task: UpdateTaskDTO) {
        return this.taskService.UpdateTask(task)
            .then((task) => {
                return task;
            })
            .catch((err) => {
                console.log(err);
                throw new BadRequestException();
            })

    }

    
    @UseGuards(IsTaskOwnerOrIsAdminGuard)
    @Delete('/:id')
    @ApiOperation({
        summary: 'Delete a task by its id'
    })
    @ApiParam({
        name: 'id',
        type: Number,
        required: true
    })
    softDeleteTask(@Param('id',ParseIntPipe) id: number) {
        this.taskService.softDeleteTask(id)
        .catch((err)=>{
            console.log(err);
            throw new BadRequestException();
        });
    }




}
