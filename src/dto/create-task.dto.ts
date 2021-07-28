import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNotEmptyObject } from "class-validator";
import { Project } from "src/models/project.entity";
import { TaskTag } from "src/models/task-tag.entity";
import { User } from "src/models/user.entity";


export class CreateTaskDTO {

    @ApiProperty()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty({default:{id:"add a project id here"}})
    @IsNotEmptyObject()
    associatedProject: Project;

    @ApiProperty({type:[TaskTag]})
    taskTags: TaskTag[];

    @ApiProperty({default:{id:"add an user id here"}})
    @IsNotEmptyObject()
    createdBy: User;

}