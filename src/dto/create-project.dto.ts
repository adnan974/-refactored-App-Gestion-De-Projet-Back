import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNotEmptyObject, IsNumber } from "class-validator";
import { ProjectState } from "src/models/project-state.entity";
import { ProjectTag } from "src/models/project-tag.entity";
import { Task } from "src/models/task.entity";
import { User } from "src/models/user.entity";


export class CreateProjectDTO{

    @ApiProperty()
    @IsNotEmpty()
    title:string;

    @ApiProperty()
    description:string;

    @ApiProperty({default:{id:1}})
    @IsNotEmptyObject()
    state:ProjectState;

    @ApiProperty({type:[ProjectTag]})
    projectTags:ProjectTag[];

    @ApiProperty({default:{id:'add user id here'}})
    @IsNotEmptyObject()
    createdBy:User;
}