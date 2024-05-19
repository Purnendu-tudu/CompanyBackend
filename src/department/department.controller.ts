import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { ApiTags, ApiOperation,ApiResponse } from '@nestjs/swagger';



@ApiTags('Department Endpoints')
@Controller('department')
export class DepartmentController {


  constructor(private readonly departmentService: DepartmentService) {}

  
  @ApiOperation({summary:'List All the departments'})
  @ApiResponse({status:200, description:'Request Succesful'})
  @Get()
  async findAll() {
    return await this.departmentService.findAll();
  }

  @ApiOperation({summary:'Get Department Details by DeptId'})
  @ApiResponse({status:200, description:'Request Successful'})
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.departmentService.findOne(id);
  }
  
  @ApiOperation({summary:'Create A new department'})
  @ApiResponse({status:201, description:'Department created successfully'})
  @Post()
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentService.create(createDepartmentDto);
  }

  @ApiOperation({summary:'Update An existing department by DeptId'})
  @ApiResponse({status:200, description:'Department Updated Successfully'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentService.update(id, updateDepartmentDto);
  }

  
  @Delete(':id')
  @ApiResponse({status:200, description:'Department Deleted Successfully'})
  @ApiOperation({summary:'Delete An Depratment using by deptId'})
  async remove(@Param('id') id: string) {
    return await this.departmentService.remove(id);
  }
}
