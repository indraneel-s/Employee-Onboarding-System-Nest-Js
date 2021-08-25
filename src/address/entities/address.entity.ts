import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import * as crypto from 'crypto';
import { EmployeeEntity } from 'src/employee/entities/employee.entity'; 
@Entity('address_table_data')
export default class AddressEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    addressId:number
    @Column({nullable: true})
    employeeCode:string
    @Column()
    @IsNotEmpty()
    type:string
    @Column({nullable: true})
    flatName:string
    @Column({nullable: true})
    streetName:string
    @Column({nullable: true})
    area:string
    @Column({nullable: true})
    state:string
    @Column({nullable: true})
    country:string
    @Column({nullable: true})
    city:string
    @Column({nullable: true})
    pinCode: string
    @Column({nullable: true})
    mapCoordinates:string
    @ManyToOne(() => EmployeeEntity, employeeEntity => employeeEntity.addresses,
    {
        cascade: ['insert', 'update'],
        lazy:true
    })
    @JoinColumn()
    public emp: Promise<EmployeeEntity>;


}