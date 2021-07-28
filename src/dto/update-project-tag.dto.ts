import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UpdateProjectTagDTO{

    @ApiProperty()
    @IsNotEmpty()
    id:number;

    @ApiProperty()
    @IsNotEmpty()
    tagName:string;

}
  