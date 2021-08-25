import { EmployeeEntity } from "src/employee/entities/employee.entity";
import internal from "stream";
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

    @Entity("user_table")
   export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    sno: number;

    @Column()
    email: string;

    @Column()
    password: string;
     @Column()
     roleId:number;
    @OneToOne(() => EmployeeEntity,employee => employee.employeeId)
    @JoinColumn()
    employee: EmployeeEntity;
}
