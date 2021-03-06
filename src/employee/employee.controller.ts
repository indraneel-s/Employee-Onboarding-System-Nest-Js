import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { HttpStatus } from '@nestjs/common';
import { EmployeeDTO } from 'src/employee/dto/EmployeeDTO';
import { Put } from '@nestjs/common';
import { userDTO } from 'src/user/dto/userDTO';
import axios, { AxiosResponse } from 'axios'; 

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get(':id')
    async readUser(@Param('id') id: number) {
      const data =  await this.employeeService.read(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'User fetched successfully',
        data
      };
    }
    @Get()
    async showAllUsers() {
      const users =  await this.employeeService.showAll();
   
      
      return {
        statusCode: HttpStatus.OK,
        message: 'Users fetched successfully',
        users
      };
    }

    @Put(':id')
    async uppdateUser(@Param('id') id: number, @Body() data: EmployeeDTO) {
      await this.employeeService.update(id, data);
      return {
        statusCode: HttpStatus.OK,
        message: 'User updated successfully',
      };
    }
    @Post()
    async addUser(@Body()data:userDTO)
    {
      await this.employeeService.create(data)

    }
    @Put('/status/:id')
    async updateStatus(@Param('id') id:number,@Body() data:Partial<EmployeeDTO>) {
      await this.employeeService.updateStatus(id,data)
    }
    @Post('/notify/:id')
    async notifyEmployee(@Param('id')id:number)
    {
      await this.employeeService.notifyEmployee(id)
    }
  


}
