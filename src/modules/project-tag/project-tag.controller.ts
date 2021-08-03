import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProjectTagDTO } from 'src/dto/create-project-tag.dto';
import { UpdateProjectTagDTO } from 'src/dto/update-project-tag.dto';
import { IsAdminGuard } from 'src/guards/is-admin.guard';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { ProjectTagService } from 'src/services/project-tag/project-tag.service';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('project-tags')
@ApiTags('project-tags')
export class ProjectTagController {

    constructor(private projectTagService: ProjectTagService) { }


    @ApiOperation({
        summary: 'get all project tags'
    })
    @UseGuards(IsAdminGuard)
    @Get()
    getAllProjectTags(){
        return this.projectTagService.getAllProjectTags();
    }


    @ApiOperation({
        summary: 'create a project tag'
    })
    @UseGuards(IsAdminGuard)
    @Post()
    createProjectTag(@Body() projectTag:CreateProjectTagDTO){
        return this.projectTagService.createProjectTag(projectTag);
    }
    
    @ApiOperation({
        summary: 'update a project tag'
    })
    @UseGuards(IsAdminGuard)
    @Patch('/:id')
    updateProjectTag(@Body() updatedTag: UpdateProjectTagDTO,@Param('id',ParseIntPipe) projectTagId:number) {
        return this.projectTagService.updateProjectTag(projectTagId,updatedTag)
            .then((tag) => {
                return tag;
            })
            .catch((err) => {
                console.log(err);
                throw new BadRequestException();
            });

    }

    @ApiOperation({
        summary: '(hard) delete a project tag'
    })
    @UseGuards(IsAdminGuard)
    @Delete('/:id')
    deleteProjectTag(@Param('id',ParseIntPipe) tagId: number) {
        this.projectTagService.deleteProjectTag(tagId)
        .catch((err) => {
            console.log(err);
            throw new BadRequestException();
        });;
    }
}
