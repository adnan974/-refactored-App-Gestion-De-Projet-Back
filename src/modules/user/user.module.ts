import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepostory } from 'src/repositories/user.repository';
import { UserService } from '../../services/user/user.service';
import { UserController } from './user.controller';

@Module({
  imports:[TypeOrmModule.forFeature([UserRepostory])],
  controllers: [UserController],
  providers:[UserService]
})
export class UserModule {}
