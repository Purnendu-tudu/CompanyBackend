import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsString, IsOptional, IsInt, IsIn,  } from "class-validator";

export class CreateEmployeeDto {
    
    @ApiProperty({example:"Tudu"})
    @IsString()
    first_name: string;

    @ApiProperty({example:"Becker"})
    @IsString()
    last_name: string;

    @ApiProperty({example:"Abcd Avenue"})
    @IsString()
    address: string;

    @ApiProperty({example:"Abcd City"})
    @IsString()
    city: string;

    @ApiProperty({example:123456})
    @IsInt()
    pincode: number;

    @ApiPropertyOptional({example:"BDEV12"})
    @IsString()
    @IsOptional()
    deptId?: string;
}
