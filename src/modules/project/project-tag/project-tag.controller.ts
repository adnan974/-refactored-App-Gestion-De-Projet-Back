import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProjectTagDTO } from 'src/dto/create-project-tag.dto';
import { UpdateProjectTagDTO } from 'src/dto/update-project-tag.dto';
import { IsProjectOwnerGuardOrIsAdmin } from 'src/guards/is-project-owner-or-is-admin.guard';
import { ProjectTag } from 'src/models/project-tag.entity';
import { ProjectTagService } from 'src/services/project-tags/project-tag.service';

@Controller('/projects/:id/project-tags')
@ApiTags('projects')
export class ProjectTagController {

    constructor(private projectTagService: ProjectTagService) { }

    @ApiOperation({
        summary: 'get All tags of a project'
    })
    @Get()
    getProjectTagsOfAProject(@Param('id') projectId: number) {
        return this.projectTagService.getProjectTagsOfAProject(projectId)
            .then((projectTags) => {
                return projectTags;
            })
            .catch((err) => {
                console.log(err);
                throw new BadRequestException();
            });
    }

    @ApiOperation({
        summary: 'add tag to a project'
    })
    @Post()
    createProjectTagOfAProject(@Param('id') projectId: number, @Body() tag: ProjectTag) {
        return this.projectTagService.addProjectTagToAProject(projectId, tag)
            .then((project) => {
                return project
            })
            .catch((err) => {
                console.log(err);
                throw new BadRequestException();
            });
    }


}
