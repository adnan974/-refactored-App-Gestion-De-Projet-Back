import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNotEmptyObject, IsOptional } from "class-validator";
import { Gender } from "src/models/gender.entity";
import { Project } from "src/models/project.entity";
import { Role } from "src/models/role.entity";
import { Task } from "src/models/task.entity";


export class UpdateUserDTO {

    @ApiProperty({ type: Number })
    @IsNotEmpty()
    id: number;

    @ApiProperty({ default: { id: 1 }, type: Gender })
    @IsOptional()
    @IsNotEmptyObject()
    gender: Gender;

    @ApiProperty({ default: { id: 1 }})
    @IsOptional()
    @IsNotEmptyObject()
    role: Role;

    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    firstname: string;

    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    lastname: string;

    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    address: string;

    @ApiProperty()
    @IsOptional()
    address2: string;

    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    username: string;

    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    password: string;

    @ApiProperty({ type: [Project] })
    @IsOptional()
    projects: Project[];

    @ApiProperty({ type: [Task] })
    @IsOptional()
    tasks: Task[];

}