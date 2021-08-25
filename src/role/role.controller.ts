import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}



  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  @Get('/:name')
  async findOne(@Param('name')name:string) {
     return  this.roleService.findOneByName(name);
   }


}
