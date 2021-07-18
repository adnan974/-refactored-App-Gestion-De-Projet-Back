import { Project } from "src/models/project.entity";

export class UpdateTaskDTO{
    id:number;
    description:string;
    title:string;
    associatedProject:Project;    
}