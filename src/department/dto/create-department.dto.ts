import { IsString, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateDepartmentDto {
    
    @ApiProperty({example: 'TEST12'})
    @IsString()
    id : string;


    @ApiProperty({example: 'Tester For the app'})
    @IsString()
    name : string;
}
