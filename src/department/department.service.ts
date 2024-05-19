import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepartmentService {

  constructor(private prisam : PrismaService){}

  async create(createDepartmentDto: CreateDepartmentDto) {
    return await this.prisam.dept.create({
      data: createDepartmentDto
    });
  }

  findAll() {
    return this.prisam.dept.findMany();
  }

  findOne(id: string) {
    return this.prisam.dept.findUnique({
      where : { id }
    });
  }

  update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    return this.prisam.dept.update({
      where : { id},
      data : updateDepartmentDto
    });
  }

  async remove(id: string) {
    return await this.prisam.dept.delete({
      where : { id}
    });
  }
}
