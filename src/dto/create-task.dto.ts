import { Project } from "src/models/project.entity";
import { TaskTag } from "src/models/task-tag.entity";
import { User } from "src/models/user.entity";


export class CreateTaskDTO{ 
    
    description:string;
    title:string;
    associatedProject:Project;
    taskTags:TaskTag[];
    createdBy:User;
    
}