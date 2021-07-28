import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProjectTagDTO } from 'src/dto/create-project-tag.dto';
import { UpdateProjectTagDTO } from 'src/dto/update-project-tag.dto';
import { IsProjectOwnerGuardOrIsAdmin } from 'src/guards/is-project-owner-or-is-admin.guard';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { ProjectTag } from 'src/models/project-tag.entity';
import { ProjectTagService } from 'src/services/project-tag/project-tag.service';

@UseGuards(JwtAuthGuard)
@Controller('/projects/:id/project-tags')
@ApiTags('projects')
@ApiBearerAuth()
export class ProjectTagController {

    constructor(private projectTagService: ProjectTagService) { }

    @ApiOperation({
        summary: 'get All tags of a project'
    })
    @UseGuards(IsProjectOwnerGuardOrIsAdmin)
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
    @UseGuards(IsProjectOwnerGuardOrIsAdmin)
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
