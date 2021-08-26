import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeRepository } from './employeerepo';
import { AddressRepository } from 'src/address/addressrepo';
import { EmployeeEntity } from './entities/employee.entity';
import AddressEntity from 'src/address/entities/address.entity';
import { UserRepository } from 'src/user/userrepo';
import { User } from 'src/user/entities/user.entity';
import { MailerService } from '@nest-modules/mailer';
import { MailService } from 'src/mail/mail.service';



@Module({
  imports: [TypeOrmModule.forFeature([EmployeeRepository,AddressRepository,EmployeeEntity,AddressEntity,User,UserRepository])],
  controllers: [EmployeeController],
  providers: [EmployeeService,MailService],
})
export class EmployeeModule {}
