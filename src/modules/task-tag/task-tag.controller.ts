import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTaskTagDTO } from 'src/dto/create-task-tag.dto';
import { UpdateTaskTagDTO } from 'src/dto/update-task-tag.dto';
import { IsAdminGuard } from 'src/guards/is-admin.guard';
import { TaskTagService } from 'src/services/task-tag/task-tag.service';

@Controller('task-tags')
@ApiBearerAuth()
@ApiTags('task-tags')
export class TaskTagController {

    constructor(private taskTagService:TaskTagService){}


    @ApiOperation({
        summary: 'get all task tags'
    })
    @UseGuards(IsAdminGuard)
    @Get()
    getAllTaskTags() {
        return this.taskTagService.getAllTaskTags();
    }


    @ApiOperation({
        summary: 'create a task tag'
    })
    @UseGuards(IsAdminGuard)
    @Post()
    createTaskTag(@Body() taskTag: CreateTaskTagDTO) {
        return this.taskTagService.createTaskTag(taskTag);
    }

    @ApiOperation({
        summary: 'update a task tag'
    })
    @Patch()
    updateTaskTag(@Body() updatedTag: UpdateTaskTagDTO) {
        return this.taskTagService.updateTaskTag(updatedTag)
            .then((tag) => {
                return tag;
            })
            .catch((err) => {
                console.log(err);
                throw new BadRequestException();
            });

    }

    @ApiOperation({
        summary: '(hard) delete a task tag'
    })
    @UseGuards(IsAdminGuard)
    @Delete('/:id')
    deleteTaskTag(@Param('id') tagId: number) {
        this.taskTagService.deleteTaskTag(tagId)
            .catch((err) => {
                console.log(err);
                throw new BadRequestException();
            });;
    }

}
