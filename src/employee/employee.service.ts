import { Injectable, HttpStatus, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
    import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeDTO } from 'src/employee/dto/EmployeeDTO';
import { AddressRepository } from 'src/address/addressrepo';
    import { createQueryBuilder, getConnection, getManager, Repository } from 'typeorm';
import { EmployeeRepository } from './employeerepo';
import { userVo } from 'src/user/dto/uservo';
import { EmployeeEntity } from './entities/employee.entity';
import { UserRepository } from 'src/user/userrepo';
import AddressEntity from 'src/address/entities/address.entity';
  
   

    
@Injectable()
export class EmployeeService {
  constructor(
 
    private employeeRepository: EmployeeRepository,
    private addressRepository:AddressRepository,
    private userRepository:UserRepository
  ) 
  {}
  @UseInterceptors(ClassSerializerInterceptor)
async showAll() {

let employees = await this.employeeRepository.find({ relations: ["addresses"] });


return employees;
}


async create(data: userVo) {

 
  let addresses = new Array<AddressEntity>(2);
    let presentAddress=new AddressEntity()
    presentAddress.type="Present";
    let permanentAddress= new AddressEntity()
    permanentAddress.type="Permanent"
    addresses.push(presentAddress)
    addresses.push(permanentAddress)
  let employeeInitalDetails={firstName:data.name,lastName:data.name,emailId:data.email,roleId:data.roleId,currentStatus:'INCOMPLETE',addresses:addresses}
   
  // const employee = this.employeeRepository.create(employeeInitalDetails);
  // employee.addresses[0].type="Present";
  // employee.addresses[1].type="Permanent";
let employeeData= await this.employeeRepository.save(employeeInitalDetails);
let userData=await this.userRepository.save({email:data.email,password:data.password,roleId:data.roleId,employee:employeeData})
if(employeeData!=null&&userData!=null)
{
 return employeeData
}
}


      async read(employeeId: number) {
        return await this.employeeRepository.findOne(
          { where: { employeeId: employeeId },relations: ["addresses"] }
          );
      }

      async update(employeeId: number, data: EmployeeDTO) {

        let addresses=data.addresses
        delete data.addresses
        let employeeCode="LIS"+employeeId;
        data.employeeCode=employeeCode

     
      if(data.action=="Submit")
      {
        data.currentStatus="PENDING"
      }
      if(data.action=="Save")
      {
        data.currentStatus="INCOMPLETE"
      }
      
       let employee=this.read(employeeId);
       delete data.action
       if(addresses[0]!=null&&addresses[1]!=null)
       {

       await this.employeeRepository.update({employeeId},data)
       let addressId=(await employee).addresses[0].addressId
       addresses[0].employeeCode=employeeCode
       await this.addressRepository.update({addressId},addresses[0])
       addressId= (await employee).addresses[1].addressId
       addresses[1].employeeCode=employeeCode
       await this.addressRepository.update({addressId},addresses[1])
       }
      
    
        

      

    
    }
    async updateStatus(employeeId:number,data:Partial<EmployeeDTO>)
    {
      if(data.currentStatus=="Approve")
      {
        data.currentStatus="COMPLETED"
        data.rejectReason=""
      }
      else
      {
        data.currentStatus="REJECTED"
      }
      await this.employeeRepository.update({employeeId},data)
    }


    
    }
  
