import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToMany, UsingJoinTableOnlyOnOneSideAllowedError, JoinTable, JoinColumn } from 'typeorm';
import * as crypto from 'crypto';
import { IsNotEmpty } from 'class-validator';
import AddressEntity from 'src/address/entities/address.entity';


@Entity('edt')
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  employeeId: number;
  @Column()
  @IsNotEmpty()
  employeeCode: string;
  @Column()
  @IsNotEmpty()
  firstName: string;
  @Column()
  @IsNotEmpty()
  lastName: string;
  @Column()
  @IsNotEmpty()
  dob:string;
  @Column()
  @IsNotEmpty()
  bloodGroup:string;
  @Column()
  @IsNotEmpty()
  aadharNumber:string;
  @Column()
  @IsNotEmpty()
  fatherName:string;
  @Column()
  @IsNotEmpty()
  motherName:string;
  @Column()
  @IsNotEmpty()
  emailId:string;
  @Column()
  @IsNotEmpty()
  phoneNumber:string;
  @Column()
  @IsNotEmpty()
  sslc:number;
  @Column()
  @IsNotEmpty()
  hsc:number;
  @Column()
  @IsNotEmpty()
  ug:number;
  @Column()
  @IsNotEmpty()
  gender:string;
  @Column()
  @IsNotEmpty()
  emergencyContactName:string;
  @Column()
  emergencyContactPhoneNumber:string;
  @Column()
  emergencyContactRelation:string
  @Column()
  currentStatus:string;
  @Column()
  rejectReason:string;
  @JoinColumn()
  @OneToMany(() => AddressEntity, (addressEntity: AddressEntity) => addressEntity.emp,{ cascade: ['insert', 'update'] })
  public addresses: AddressEntity[];
  
}
