import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { UserRepository } from 'src/user/userrepo';
import { User } from 'src/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User,UserRepository])],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
