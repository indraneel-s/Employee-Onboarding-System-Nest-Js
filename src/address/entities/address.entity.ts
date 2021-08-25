import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToOne, JoinColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import * as crypto from 'crypto';
import { EmployeeEntity } from 'src/employee/entities/employee.entity'; 
@Entity('address_table_data')
export default class AddressEntity {

    @PrimaryGeneratedColumn()
    addressId:number
    @Column()
    employeeCode:string
    @Column()
    @IsNotEmpty()
    type:string
    @Column()
    @IsNotEmpty()
    flatName:string
    @Column()
    @IsNotEmpty()
    streetName:string
    @Column()
    @IsNotEmpty()
    area:string
    @Column()
    @IsNotEmpty()
    state:string
    @Column()
    @IsNotEmpty()
    country:string
    @Column()
    @IsNotEmpty()
    city:string
    @Column()
    @IsNotEmpty()
    pinCode: string
    @Column()
    @IsNotEmpty()
    mapCoordinates:string
    @ManyToOne(() => EmployeeEntity, employeeEntity => employeeEntity.addresses,
    {
        lazy:true
    })
    @JoinColumn()
    public emp: Promise<EmployeeEntity>;


}