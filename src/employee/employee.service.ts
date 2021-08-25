import { Injectable, HttpStatus, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
    import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeDTO } from 'src/employee/dto/EmployeeDTO';
import { AddressRepository } from 'src/address/addressrepo';
    import { createQueryBuilder, getConnection, getManager, Repository } from 'typeorm';
import { EmployeeRepository } from './employeerepo';
import { userVo } from 'src/user/dto/uservo';
import { EmployeeEntity } from './entities/employee.entity';
  
   

        
    @Injectable()
    export class EmployeeService {
      constructor(
     
        private employeeRepository: EmployeeRepository,
        private addressRepository:AddressRepository
      ) 
      {}
      @UseInterceptors(ClassSerializerInterceptor)
  async showAll() {

    let employees = await this.employeeRepository.find({ relations: ["addresses"] });
    
  
    return employees;
  }


  async create(data: userVo) {
    // const user = this.employeeRepository.create(data);
    // await this.employeeRepository.save(data);
    // let val=createQueryBuilder(EmployeeEntity).select("MAX(edt.employeeId)", "max").getRawOne;

    //    let code= "LIS"+val;
    //    console.log("JSBGDSJFDSF",code)
    
       let val=await  getManager().query(`SELECT MAX(employeeId) FROM edt`);
       
  //  let employeeData= await this.employeeRepository.save({firstName:data.name,lastName:data.name,emailId:data.email,roleId:data.roleId,currentStatus:'INCOMPLETE'});
     console.log("SHARATH",val.TextRow)
    const dummy: Number=val.employeeId
     console.log("DJFDSFDSF",dummy)
    // console.log("FDFSDF",val[0])
  //   console.log(this.getOneMaximumQuotationVersion)

//  let val2= this.employeeRepository.find({
//     order: {
       
//         employeeId: "DESC"
//     },
   
// });
// console.log("DSFDSFSDFSD", (await val2))



  }
    async getOneMaximumQuotationVersion() {
      
      let val=createQueryBuilder("edt").select("MAX(edt.employeeId)", "max").getOne;
      return val;
      
  }
  
  



      async read(employeeId: number) {
        return await this.employeeRepository.findOne(
          { where: { employeeId: employeeId },relations: ["addresses"] }
          );
      }

      async update(employeeId: number, data: EmployeeDTO) {
      let employeeCode= String(employeeId+1)
      let employeeDemographics={
        employeeId:employeeId,
        employeeCode:employeeCode,
        firstName:data.firstName,
        lastName:data.lastName,
        aadharNumber:data.aadharNumber,
        gender:data.gender,
        emailId:data.emailId,
        fatherName:data.fatherName,
        motherName:data.motherName,
        bloodGroup:data.bloodGroup,
        dob:data.dob,
        currentStatus:"",
        phoneNumber:data.phoneNumber,
        sslc:data.sslc,
        hsc:data.hsc,
        ug:data.ug,
        rejectReason:"",
        emergencyContactName:data.emergencyContactName,
        emergencyContactPhoneNumber:data.emergencyContactPhoneNumber,
        emergencyContactRelation:data.emergencyContactRelation
      }
      if(data.action=="Submit")
      {
        employeeDemographics.currentStatus="PENDING"
      }
      if(data.action=="Save")
      {
        employeeDemographics.currentStatus="INCOMPLETE"
      }
        let val=this.read(employeeId);
       let addressId=(await val).addresses[0].addressId
      
        await this.addressRepository.update({addressId},data.addresses[0])
        addressId=(await val).addresses[1].addressId
        data.addresses[1].addressId=addressId
        await this.addressRepository.update({addressId},data.addresses[1])
    
        await this.employeeRepository.update({employeeId},employeeDemographics);

      }

    
    }
