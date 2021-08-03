import { BadRequestException, Body, Controller, Delete, ExecutionContext, ForbiddenException, Get, Param, ParseIntPipe, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProjectDTO } from 'src/dto/create-project.dto';
import { UpdateProjectDTO } from 'src/dto/update-project.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { ProjectService } from 'src/services/project/project.service';
import { IsAdminGuard } from 'src/guards/is-admin.guard';
import { IsProjectOwnerGuardOrIsAdmin } from 'src/guards/is-project-owner-or-is-admin.guard';
import { paginatedParams } from 'src/decorators/getPaginationParams.decorator';
//import { AuthGuard } from '@nestjs/passport';

// commenter pour désactiver l'auth par JWT dans toutes les routes du controller
@UseGuards(JwtAuthGuard)
@Controller('projects')
@ApiBearerAuth()
@ApiTags('projects')
export class ProjectController {

    constructor(
        private projectService: ProjectService,
        ) { }

    // TODO Ajout du DTO qui gère la pagination
    @Get()

    //#Authorization_RBAC 1): 
    // Ici, on crée un décorateur qui aura pour but de dire a quel role à cette 
    // route est accessible. (voir code)
    //@Roles(Role.Admin,Role.User)
    @UseGuards(IsAdminGuard)
    @ApiOperation({
        summary: 'Get all projets',
    })
    @ApiQuery({name:'page',required:false})
    @ApiQuery({name:'limit',required:false})
    getAllProjects(@paginatedParams() paginatedParams){

        let projectData = this.projectService.getAllProjects()
            .then((projects) => {

                projects = projects.slice(paginatedParams.firstIndex, paginatedParams.lastIndex);

                return projects
            })
            .catch((err) => {
                console.log(err);
                throw new BadRequestException();
            });
        
        

        return projectData;

    }

    @Get('/:id')
    // #Action_Based_Authorization(Systeme perso) 1:
    // On crée un guard (un middleware) qui va être appélé avant la méthode getProjet()
    // Voir 2 pour le fonctionnement du guard
    @UseGuards(IsProjectOwnerGuardOrIsAdmin)
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
    getProject(@Param('id',ParseIntPipe) id: number) {

        
        return this.projectService.getProject(id)
            .then((project) => {
                return project;
            })
            .catch((err) => {
                console.log(err);
                throw new BadRequestException();
            })
    }


    @Post()
    @ApiOperation({
        summary:'Create a new project'
    })
    createProject(@Body() project:CreateProjectDTO){
        return this.projectService.crateProject(project)
        .then((project)=>{
            return project;
        })
        .catch((err)=>{
            console.log(err);
            throw new BadRequestException();
        });
    }

    
    @Patch('/:id')
    @UseGuards(IsProjectOwnerGuardOrIsAdmin)
    @ApiOperation({
        summary:'Update a project'
    })
    //TODO API BOdy ???
    updateProject(@Body() updatedProject:UpdateProjectDTO,@Param('id',ParseIntPipe) projectId:number){
       return this.projectService.updateProject(projectId,updatedProject)
       .then((project)=>{
           return project;
       })
       .catch((err)=>{
           console.log(err);
           throw new BadRequestException();
       });
    }

    @UseGuards(IsProjectOwnerGuardOrIsAdmin)
    @Delete(':id')
    @ApiOperation({
        summary:'Delete project by its id'
    })
    @ApiParam({
        name:'id',
        type:Number,
        required:true
    })
    softDeleteProject(@Param('id',ParseIntPipe) id:number){
        return this.projectService.softDeleteProject(id)
        .catch((err)=>{
            console.log(err);
            throw new BadRequestException();
        });
    }


}
