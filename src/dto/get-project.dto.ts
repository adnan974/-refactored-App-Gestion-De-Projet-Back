import { ProjectState } from "src/models/project-state.entity";
import { ProjectTag } from "src/models/project-tag.entity";
import { Task } from "src/models/task.entity";
import { User } from "src/models/user.entity";

export class GetProjectDTO{
    id:number;
    description:string;
    title:string;
    state:ProjectState;
    tasks:Task[];
    projectTags:ProjectTag[];
    createdBy:User;

}