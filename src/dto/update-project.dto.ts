import { ProjectState } from "src/models/project-state.entity";

export class UpdateProjectDTO{
    id:number;
    description:string;
    title:string;
    state:ProjectState;
    
}