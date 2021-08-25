import { Exclude } from "class-transformer";
import { Address } from "node:cluster";
import AddressEntity from "src/address/entities/address.entity";
import { Double } from "typeorm";

export class EmployeeDTO {

    employeeId: number;
    employeeCode: string;
    firstName: string;
    lastName: string;
    dob:string;
    bloodGroup:string;
    aadharNumber:string;
    fatherName:string;
    motherName:string;
    emailId:string;
    phoneNumber:string;
    sslc:number;
    hsc:number;
    ug:number;
    gender:string;
    emergencyContactName:string;
    emergencyContactPhoneNumber:string;
    emergencyContactRelation:string
    action:string
    currentStatus:string;
    rejectReason:string;
  
    public addresses: AddressEntity[];

    

  }