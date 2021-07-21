import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectRepository } from 'src/repositories/project.repository';
import { UserRepostory } from 'src/repositories/user.repository';
import { ProjectAuthorization } from './project-authorization';
import { UserAuthorization } from './user-authorization';

@Module({
    imports:[TypeOrmModule.forFeature([UserRepostory,ProjectRepository])],
    providers:[UserAuthorization,ProjectAuthorization],
    exports:[UserAuthorization,ProjectAuthorization]
})
export class AuthorizationModule {}
