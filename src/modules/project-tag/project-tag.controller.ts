import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProjectTagDTO } from 'src/dto/create-project-tag.dto';
import { UpdateProjectTagDTO } from 'src/dto/update-project-tag.dto';
import { ProjectTagService } from 'src/services/project-tags/project-tag.service';


@Controller('project-tags')
@ApiTags('project-tags')
export class ProjectTagController {

    constructor(private projectTagService: ProjectTagService) { }

    @ApiOperation({
        summary: 'get all project tags'
    })
    @Get()
    getAllProjctTags(){
        return this.projectTagService.getAllProjectTags();
    }


    @ApiOperation({
        summary: 'create a project tag'
    })
    @Post()
    createProjctTag(@Body() projectTag:CreateProjectTagDTO){
        return this.projectTagService.createProjectTag(projectTag);
    }
    
    @ApiOperation({
        summary: 'update a project tag'
    })
    @Patch()
    updateProjectTagOfAProject(@Body() updatedTag: UpdateProjectTagDTO) {
        return this.projectTagService.updateProjectTagOfAProject(updatedTag)
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
    @Delete('/:id')
    deleteProjectTagOfAProject(@Param('id') tagId: number) {
        this.projectTagService.deleteProjectTagOfAProject(tagId)
        .catch((err) => {
            console.log(err);
            throw new BadRequestException();
        });;
    }
}
