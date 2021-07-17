import { User } from "src/models/user.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
export class UserRepostory extends Repository<User>{


}