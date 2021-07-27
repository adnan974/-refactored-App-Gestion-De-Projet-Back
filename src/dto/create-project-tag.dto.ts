import { ApiProperty } from "@nestjs/swagger";

    
export class CreateProjectTagDTO{

    @ApiProperty()
    tagName:string;
}
  