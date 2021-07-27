import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectTagRepository } from 'src/repositories/project-tag.repository';
import { ProjectRepository } from 'src/repositories/project.repository';
import { ProjectTagService } from 'src/services/project-tags/project-tag.service';
import { ProjectTagController } from './project-tag.controller';

@Module({
  imports:[TypeOrmModule.forFeature([ProjectTagRepository,ProjectRepository])],
  controllers: [ProjectTagController],
  providers:[ProjectTagService]
})
export class ProjectTagModule {

}
