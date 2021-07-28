import { BadRequestException, Body, Controller, Delete, ExecutionContext, ForbiddenException, Get, Param, ParseIntPipe, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/constants/role.enum';
import { Roles, ROLES_KEY } from 'src/decorators/roles.decorator';
import { CreateProjectDTO } from 'src/dto/create-project.dto';
import { GetPaginatedProject } from 'src/dto/get-paginated-project.dto';
import { GetProjectDTO } from 'src/dto/get-project.dto';
import { UpdateProjectDTO } from 'src/dto/update-project.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { Project } from 'src/models/project.entity';
import { ProjectService } from 'src/services/project/project.service';

import { Reflector } from '@nestjs/core';
import { RolesGuard } from 'src/guards/role.guard';
import { UserAuthorization } from '../authorization/user-authorization';
import { ProjectAuthorization } from '../authorization/project-authorization';
import { IsAdminGuard } from 'src/guards/is-admin.guard';
import { IsProjectOwnerGuardOrIsAdmin } from 'src/guards/is-project-owner-or-is-admin.guard';
//import { AuthGuard } from '@nestjs/passport';

// commenter pour désactiver l'auth par JWT dans toutes les routes du controller
@UseGuards(JwtAuthGuard)
@Controller('projects')
@ApiBearerAuth()
@ApiTags('projects')
export class ProjectController {

    constructor(
        private projectService: ProjectService,
        private reflector:Reflector,
        private userAuthorization:UserAuthorization,
        private projectAuthorization:ProjectAuthorization
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
    async getAllProjects(@Query() query):Promise<any>{

        
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
    async getProject(@Param('id',ParseIntPipe) id: number) {

        console.log("get project");
        
        // let isAdmin:Boolean= await this.userAuthorization.isAdmin(req.user.id).then((res)=>{
        //     return res;
        // })
        // let isProjectOwner:Boolean = await this.projectAuthorization.isProjectOwner(req.user.id,id).then((res)=>{
        //     return res;
        // });

        // if(isProjectOwner===false && isAdmin === false) throw new ForbiddenException();

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

    
    @Patch()
    @UseGuards(IsProjectOwnerGuardOrIsAdmin)
    @ApiOperation({
        summary:'Update a project'
    })
    //TODO API BOdy ???
    updateProject(@Body() project:UpdateProjectDTO){
       return this.projectService.updateProject(project)
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
