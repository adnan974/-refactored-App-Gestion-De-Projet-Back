import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectTagRepository } from 'src/repositories/project-tag.repository';
import { ProjectRepository } from 'src/repositories/project.repository';
import { ProjectTagService } from 'src/services/project-tag/project-tag.service';
import { AuthorizationModule } from '../authorization/authorization.module';
import { ProjectAuthorization } from '../authorization/project-authorization';
import { ProjectTagController } from './project-tag.controller';

@Module({
  imports:[TypeOrmModule.forFeature([ProjectTagRepository,ProjectRepository]),AuthorizationModule],
  controllers: [ProjectTagController],
  providers:[ProjectTagService]
})
export class ProjectTagModule {

}
