import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

import { ApiResponse, ApiTags, ApiOperation} from '@nestjs/swagger'; 

//here we defining our api tags in for swagger ui
@ApiTags('Employee EndPoints')

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  
  
  

  @Get()
  @ApiOperation({summary: 'List All the employees'})
  @ApiResponse({status:200, description:'request sucessful'})
  findAll() {
    return this.employeeService.findAll();
  }

  @ApiOperation({summary: 'Get the employee details by Id'})
  @ApiResponse({status:200, description:'request sucessful'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(+id);
  }

  @ApiOperation({summary: 'Create and Employee'})
  @ApiResponse({status:201, description:'sucessfully created employee'})
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @ApiOperation({summary: 'Update an employee by employeeId'})
  @ApiResponse({status:200, description:'employee update sucessfully'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(+id, updateEmployeeDto);
  }

  @ApiOperation({summary: 'Delete an employee by employeeId'})
  @ApiResponse({status:200, description:'employee removed sucessfully'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
