import { Repository, EntityRepository, Not } from 'typeorm';
import { RoleEntity } from './entities/role.entity';

@EntityRepository(RoleEntity)
export class RoleRepository extends Repository<RoleEntity>{

    public async findByName(data:string):Promise<RoleEntity>{
        return this.findOne({where:{roleName:data}});
    }
    public async findAllRoles():Promise<RoleEntity[]>{
        return this.find({where:{roleName: Not('HR')}})
    }
}