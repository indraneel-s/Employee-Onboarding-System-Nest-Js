import { IsEmail, IsNotEmpty, IsNotEmptyObject } from "class-validator";
import { EmployeeEntity } from "src/employee/entities/employee.entity";

export class userDTO {

    @IsNotEmpty()
    name:string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    roleId:number;
     @IsNotEmpty()
    password: string;
 
     
}
