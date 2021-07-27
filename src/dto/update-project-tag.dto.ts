import { ApiProperty } from "@nestjs/swagger";

export class UpdateProjectTagDTO{

    @ApiProperty()
    id:number;

    @ApiProperty()
    tagName:string;

}
  