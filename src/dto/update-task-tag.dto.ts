import { ApiProperty } from "@nestjs/swagger";

export class UpdateTaskTagDTO{

    @ApiProperty()
    id:number;

    @ApiProperty()
    tagName:string;

}
  