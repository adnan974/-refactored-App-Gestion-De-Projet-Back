import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNotEmptyObject, IsNotIn, IsNumber, IsNumberString, IsOptional, Min, NotEquals } from "class-validator";
import { ProjectState } from "src/models/project-state.entity";
import { ProjectTag } from "src/models/project-tag.entity";
import { User } from "src/models/user.entity";

export class UpdateProjectDTO{

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

    @ApiProperty({default:{id:1}})
    @IsNotEmptyObject()
    @IsOptional()
    state:ProjectState;

    @ApiProperty({type:[ProjectTag]})
    @IsOptional()
    projectTags:ProjectTag[];

    @ApiProperty({default:{id:"add user id here"}})
    @IsNotEmptyObject()
    @IsOptional()
    createdBy:User;
    
}