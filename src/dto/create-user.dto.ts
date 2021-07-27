import { ApiProperty } from "@nestjs/swagger";
import { Gender } from "src/models/gender.entity";
import { Project } from "src/models/project.entity";
import { Role } from "src/models/role.entity";
import { Task } from "src/models/task.entity";


export class CreateUserDTO{

    @ApiProperty({type:Number,default:1})
    gender:Gender;

    @ApiProperty({type:Number,default:2})
    role:Role;

    @ApiProperty({default:"nom"})
    firstname: string;

    @ApiProperty({default:"prenom"})
    lastname: string;

    @ApiProperty({default:"adresse 1"})
    address: string;

    @ApiProperty({default:"complement adresse"})
    address2:string;

    @ApiProperty({default:"user"})
    username: string;

    @ApiProperty({default:"user"})
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