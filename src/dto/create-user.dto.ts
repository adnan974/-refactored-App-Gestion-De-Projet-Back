import { Gender } from "src/models/gender.entity";
import { Project } from "src/models/project.entity";
import { Task } from "src/models/task.entity";


export class CreateUserDTO{

    gender:Gender;
    firstname: string;
    lastname: string;
    address: string;
    address2:string;
    username: string;
    password: string;
    projects: Project[];
    createdProjects:Project[];
    createdTasks:Task[];
    tasks:Task[];

}