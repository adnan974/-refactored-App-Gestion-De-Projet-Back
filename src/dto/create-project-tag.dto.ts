import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

    
export class CreateProjectTagDTO{

    @ApiProperty()
    @IsNotEmpty()
    tagName:string;
}
  