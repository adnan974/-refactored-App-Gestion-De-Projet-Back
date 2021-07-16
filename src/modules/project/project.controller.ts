import { Controller, Get } from '@nestjs/common';
import { ApiDefaultResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Project } from 'src/models/project.entity';
import { ProjectService } from 'src/services/project/project.service';

@Controller('projects')
@ApiTags('projects')
export class ProjectController {

    constructor(private projectService:ProjectService){}

    @Get()
    @ApiOperation({
        summary:'Get all projets',
    })
    getProjects(){
       return this.projectService.getAll()
        .then((projetcs)=>{
            return projetcs
        })
        .catch((err)=>{
            console.log(err)
        });

    }

    
}
