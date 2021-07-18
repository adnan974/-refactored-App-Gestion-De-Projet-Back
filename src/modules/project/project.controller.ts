import { Body, Controller, Delete, Get, Param, Patch, Query, UseGuards } from '@nestjs/common';
import { ApiBody, ApiDefaultResponse, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetPaginatedProject } from 'src/dto/get-paginated-project.dto';
import { GetProjectDTO } from 'src/dto/get-project.dto';
import { UpdateProjectDTO } from 'src/dto/update-project.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { Project } from 'src/models/project.entity';
import { ProjectService } from 'src/services/project/project.service';

@Controller('projects')
@ApiTags('projects')
export class ProjectController {

    constructor(private projectService: ProjectService) { }

    // TODO Ajout du DTO qui gère la pagination
    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiOperation({
        summary: 'Get all projets',
    })
    getAllProjects(@Query() query):  any  {

        let page = query.page || 1;
        let limit = query.limit || 100;

        let projectData = this.projectService.getAllProjects()
            .then((projects) => {

                let firstIndex = (page * limit) - limit;
                let lastIndex = (page * limit);

                projects = projects.slice(firstIndex, lastIndex);

                return projects
            })
            .catch((err) => {
                console.log(err)
            });
        
        

        return projectData;

    }

    @Get('/:id')
    @ApiOperation({
        summary: 'Get one projet by its id',
    })
    @ApiParam({
        name: 'id',
        type: Number,
        required: true
    })
    @ApiQuery({
        name:'page',
        description:'display pagination',
        type:Number,
        required:false
    })
    @ApiQuery({
        name:'limit',
        description:'limit the number of items returned',
        type:Number,
        required:false
    })
    getProject(@Param('id') id: number) {
        return this.projectService.getProject(id)
            .then((project) => {
                return project;
            })
            .catch((err) => {
                console.log(err);
            })
    }

    @Patch()
    @ApiOperation({
        description:'Update a project'
    })
    //TODO API BOdy ???
    updateProject(@Body() project:UpdateProjectDTO){
       return this.projectService.updateProject(project)
       .then((project)=>{
           return project;
       })
       .catch((err)=>{
           console.log(err);
       });
    }

    @Delete(':id')
    @ApiOperation({
        description:'Delete project by its id'
    })
    @ApiParam({
        name:'id',
        type:Number,
        required:true
    })
    softDeleteProject(@Param('id') id:number){
        return this.projectService.softDeleteProject(id);
    }


}
