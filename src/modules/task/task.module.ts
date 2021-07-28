import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from 'src/repositories/task.repository';
import { TaskService } from 'src/services/task/task.service';
import { AuthorizationModule } from '../authorization/authorization.module';
import { TaskController } from './task.controller';
import { TaskTagController } from './task-tag/task-tag.controller';
import { TaskTagService } from 'src/services/task-tag/task-tag.service';
import { TaskTagRepository } from 'src/repositories/task-tag.repository';

@Module({
  imports:[TypeOrmModule.forFeature([TaskRepository,TaskTagRepository]),AuthorizationModule],
  controllers: [TaskController, TaskTagController],
  providers:[TaskService,TaskTagService]
})
export class TaskModule {
  
}
