import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from 'src/repositories/task.repository';
import { TaskService } from 'src/services/task/task.service';
import { TaskController } from './task.controller';

@Module({
  imports:[TypeOrmModule.forFeature([TaskRepository])],
  controllers: [TaskController],
  providers:[TaskService]
})
export class TaskModule {
  
}
