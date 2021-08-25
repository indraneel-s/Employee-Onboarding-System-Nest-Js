import { Injectable } from '@nestjs/common';
import { userDTO } from 'src/user/dto/userDTO';
import { User } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/userrepo';


@Injectable()
export class LoginService {
  constructor(private userRepository:UserRepository)
  {
    
  }
  async loginInfo(data:Partial<userDTO>)
  {
    const checkLogin : User = await User.findOne({where:{email:data.email,password:data.password}
    
     });


      if(checkLogin)
      { 
        
        return true
      }

    
    return false

  }
}
