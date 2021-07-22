import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepostory } from 'src/repositories/user.repository';
import { UserService } from '../../services/user/user.service';
import { AuthorizationModule } from '../authorization/authorization.module';
import { UserController } from './user.controller';

@Module({
  imports:[TypeOrmModule.forFeature([UserRepostory]),AuthorizationModule],
  controllers: [UserController],
  providers:[UserService],
  exports:[UserService]
})
export class UserModule {}
