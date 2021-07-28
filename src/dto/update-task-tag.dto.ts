import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UpdateTaskTagDTO{

    @ApiProperty()
    id:number;

    @ApiProperty()
    @IsNotEmpty()
    tagName:string;

}
  