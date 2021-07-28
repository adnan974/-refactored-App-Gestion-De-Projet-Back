import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskTagRepository } from 'src/repositories/task-tag.repository';
import { TaskRepository } from 'src/repositories/task.repository';
import { TaskTagService } from 'src/services/task-tag/task-tag.service';
import { AuthorizationModule } from '../authorization/authorization.module';
import { TaskTagController } from './task-tag.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TaskRepository, TaskTagRepository]),AuthorizationModule],
  controllers: [TaskTagController],
  providers: [TaskTagService]
})
export class TaskTagModule { }
