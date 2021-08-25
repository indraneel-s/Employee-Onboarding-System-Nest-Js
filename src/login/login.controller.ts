import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginService } from './login.service';

import { userDTO } from 'src/user/dto/userDTO';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  create(@Body() data: Partial<userDTO>) {
    return this.loginService.loginInfo(data)
  }

 
}
