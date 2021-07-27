import { ApiProperty } from "@nestjs/swagger";
import { Project } from "src/models/project.entity";
import { TaskTag } from "src/models/task-tag.entity";
import { User } from "src/models/user.entity";


export class CreateTaskDTO {

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    associatedProject: Project;

    @ApiProperty({type:[TaskTag]})
    taskTags: TaskTag[];

    @ApiProperty()
    createdBy: User;

}