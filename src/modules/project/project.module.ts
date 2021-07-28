import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectRepository } from 'src/repositories/project.repository';
import { UserRepostory } from 'src/repositories/user.repository';
import { ProjectService } from 'src/services/project/project.service';
import { AuthorizationModule } from '../authorization/authorization.module';
import { ProjectController } from './project.controller';
import { ProjectTagController } from './project-tag/project-tag.controller';
import { ProjectTagRepository } from 'src/repositories/project-tag.repository';
import { ProjectTagService } from 'src/services/project-tag/project-tag.service';

@Module({
  imports:[TypeOrmModule.forFeature([ProjectRepository,UserRepostory,ProjectTagRepository]),AuthorizationModule],
  controllers: [ProjectController,ProjectTagController],
  providers:[ProjectService,ProjectTagService]
})
export class ProjectModule {}
