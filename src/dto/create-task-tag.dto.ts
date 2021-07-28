import { ApiProperty } from "@nestjs/swagger";

    
export class CreateTaskTagDTO{

    @ApiProperty()
    tagName:string;
}
  