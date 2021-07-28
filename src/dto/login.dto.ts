import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Gender } from "src/models/gender.entity";
import { Project } from "src/models/project.entity";
import { Role } from "src/models/role.entity";
import { Task } from "src/models/task.entity";


export class LoginDTO{

    @ApiProperty({default:"user OU admin"})
    @IsNotEmpty()
    username: string;

    @ApiProperty({default:"user OU admin"})
    @IsNotEmpty()
    password: string;

}