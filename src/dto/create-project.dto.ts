import { ApiProperty } from "@nestjs/swagger";
import { ProjectState } from "src/models/project-state.entity";
import { ProjectTag } from "src/models/project-tag.entity";
import { Task } from "src/models/task.entity";
import { User } from "src/models/user.entity";


export class CreateProjectDTO{

    @ApiProperty()
    title:string;

    @ApiProperty()
    description:string;

    @ApiProperty()
    state:ProjectState;

    @ApiProperty({type:[ProjectTag]})
    projectTags:ProjectTag[];

    @ApiProperty()
    createdBy:User;
}