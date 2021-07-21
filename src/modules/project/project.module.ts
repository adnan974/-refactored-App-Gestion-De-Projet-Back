import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectRepository } from 'src/repositories/project.repository';
import { UserRepostory } from 'src/repositories/user.repository';
import { ProjectService } from 'src/services/project/project.service';
import { AuthorizationModule } from '../authorization/authorization.module';
import { ProjectController } from './project.controller';

@Module({
  imports:[TypeOrmModule.forFeature([ProjectRepository,UserRepostory]),AuthorizationModule],
  controllers: [ProjectController],
  providers:[ProjectService]
})
export class ProjectModule {}
