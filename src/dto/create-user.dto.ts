import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNotEmptyObject } from "class-validator";
import { Gender } from "src/models/gender.entity";
import { Project } from "src/models/project.entity";
import { Role } from "src/models/role.entity";
import { Task } from "src/models/task.entity";


export class CreateUserDTO{

    @ApiProperty({type:Number,default:{id:1}})
    @IsNotEmptyObject()
    gender:Gender;

    @ApiProperty({type:Number,default:{id:2}})
    @IsNotEmptyObject()
    role:Role;

    @ApiProperty({default:"nom"})
    @IsNotEmpty()
    firstname: string;

    @ApiProperty({default:"prenom"})
    @IsNotEmpty()
    lastname: string;

    @ApiProperty({default:"adresse 1"})
    @IsNotEmpty()
    address: string;

    @ApiProperty({default:"complement adresse"})
    address2:string;

    @ApiProperty({default:"user"})
    @IsNotEmpty()
    username: string;

    @ApiProperty({default:"user"})
    @IsNotEmpty()
    password: string;

    @ApiProperty({
        default:[],
        type:[Project]
    })
    projects: Project[];


    @ApiProperty({
        default:[],
        type:[Project]
    })
    tasks:Task[];

}