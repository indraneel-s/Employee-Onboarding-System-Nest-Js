import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AddressModule } from './address/address.module';
import { EmployeeEntity } from './employee/entities/employee.entity';
import AddressEntity from './address/entities/address.entity';
import { EmployeeModule } from './employee/employee.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { RoleModule } from './role/role.module';
import { RoleEntity } from './role/entities/role.entity';
import { LoginModule } from './login/login.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'bank',
    entities: [EmployeeEntity,AddressEntity,User,RoleEntity],
    synchronize: true,
  }),EmployeeModule, AddressModule, UserModule, RoleModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
