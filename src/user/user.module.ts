import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './userrepo';
import { EmployeeRepository } from 'src/employee/employeerepo';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';
import AddressEntity from 'src/address/entities/address.entity';
import { AddressRepository } from 'src/address/addressrepo';

@Module({ imports: [TypeOrmModule.forFeature([User,UserRepository,EmployeeRepository,EmployeeEntity,AddressEntity,AddressRepository])],

  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
