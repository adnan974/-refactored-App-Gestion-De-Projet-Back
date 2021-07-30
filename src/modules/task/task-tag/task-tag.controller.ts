import { BadRequestException, Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from 'src/guards/is-admin.guard';
import { IsTaskOwnerOrIsAdminGuard } from 'src/guards/is-task-owner-or-is-admin.guard';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { TaskTag } from 'src/models/task-tag.entity';
import { TaskTagService } from 'src/services/task-tag/task-tag.service';

@Controller('task/:id/task-tags')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('tasks')
export class TaskTagController {


    constructor(private taskTagService:TaskTagService){}

    @ApiOperation({
        summary: 'get All tags of a task'
    })
    @UseGuards(IsTaskOwnerOrIsAdminGuard)
    @Get()
    getTaskTagsOfATask(@Param('id',ParseIntPipe) taskId: number) {
        return this.taskTagService.getTaskTagsOfATask(taskId)
            .then((taskTags) => {
                return taskTags;
            })
            .catch((err) => {
                console.log(err);
                throw new BadRequestException();
            });
    }

    @ApiOperation({
        summary: 'add tag to a task'
    })
    @UseGuards(IsTaskOwnerOrIsAdminGuard)
    @Post()
    createTaskTagOfATask(@Param('id',ParseIntPipe) taskId: number, @Body() tag: TaskTag) {
        return this.taskTagService.addTaskTagToATask(taskId, tag)
            .then((task) => {
                return task;
            })
            .catch((err) => {
                console.log(err);
                throw new BadRequestException();
            });
    }
}
