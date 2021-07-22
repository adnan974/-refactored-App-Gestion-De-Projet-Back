import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectRepository } from 'src/repositories/project.repository';
import { TaskRepository } from 'src/repositories/task.repository';
import { UserRepostory } from 'src/repositories/user.repository';
import { ProjectAuthorization } from './project-authorization';
import { TaskAuthorization } from './task-authorization';
import { UserAuthorization } from './user-authorization';

@Module({
    imports:[TypeOrmModule.forFeature([UserRepostory,ProjectRepository,TaskRepository])],
    providers:[UserAuthorization,ProjectAuthorization,TaskAuthorization],
    exports:[UserAuthorization,ProjectAuthorization,TaskAuthorization]
})
export class AuthorizationModule {}
