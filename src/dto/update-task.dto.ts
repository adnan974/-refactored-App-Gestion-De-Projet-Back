import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNotEmptyObject, IsOptional } from "class-validator";
import { Project } from "src/models/project.entity";
import { TaskTag } from "src/models/task-tag.entity";
import { User } from "src/models/user.entity";

export class UpdateTaskDTO{

    @ApiProperty()
    @IsNotEmpty()
    id:number;

    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    title:string;

    @ApiProperty()
    @IsOptional()
    description:string;

    @ApiProperty({default:{id:"add a project id here"}})
    @IsNotEmptyObject()
    @IsOptional()
    associatedProject:Project; 

    @ApiProperty({type:[TaskTag]})   
    @IsOptional()
    taskTags:TaskTag[];

    @ApiProperty({default:{id:"add an user id here"}})
    @IsNotEmptyObject()
    @IsOptional()
    createdBy:User;

}