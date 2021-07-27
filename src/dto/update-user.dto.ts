import { ApiProperty } from "@nestjs/swagger";
import { Gender } from "src/models/gender.entity";
import { Project } from "src/models/project.entity";
import { Role } from "src/models/role.entity";
import { Task } from "src/models/task.entity";


export class UpdateUserDTO {

    @ApiProperty({type:Number})
    id: number;

    @ApiProperty({type:Gender})
    gender:Gender;

    @ApiProperty({type:Role})
    role:Role;

    @ApiProperty()
    firstname: string;

    @ApiProperty()
    lastname: string;

    @ApiProperty()
    address: string;

    @ApiProperty()
    address2: string;

    @ApiProperty()
    username: string;
    
    @ApiProperty()
    password: string;

    @ApiProperty({type:[Project]})
    projects: Project[];

    @ApiProperty({type:[Task]})
    tasks:Task[];

}