import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

    
export class CreateTaskTagDTO{

    @ApiProperty()
    @IsNotEmpty()
    tagName:string;
}
  