import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeService {

  //prisma service as private
  constructor(private readonly prisma : PrismaService){

  }


  create(createEmployeeDto: CreateEmployeeDto) {
    return this.prisma.employee.create({
      data:createEmployeeDto,
    });
  }

  async findAll() {
    return await this.prisma.employee.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.employee.findUnique({
      where:{id}
    });
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.prisma.employee.update({
      where :{ id},
      data : updateEmployeeDto
    });
  }

  async remove(id: number) {
    return await this.prisma.employee.delete({
      where : { id}
    });
  }
}
