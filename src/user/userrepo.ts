import { EntityRepository, Repository } from "typeorm";
import { User } from "./entities/user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    findByEmail(emailId: string,password:string):Promise<User> {
        return this.findOne({ email:emailId ,password:password });
    }
}