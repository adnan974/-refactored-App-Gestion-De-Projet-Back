import { CanActivate, ExecutionContext, Injectable, NotFoundException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TaskAuthorization } from 'src/modules/authorization/task-authorization';
import { UserAuthorization } from 'src/modules/authorization/user-authorization';
import { IsAdminGuard } from './is-admin.guard';

@Injectable()
export class IsTaskOwnerOrIsAdminGuard extends IsAdminGuard implements CanActivate {

  constructor(
    private taskAuthorization: TaskAuthorization,
    protected userAuthorization: UserAuthorization
  ) {
    super(userAuthorization);
  }

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    const { user } = context.switchToHttp().getRequest();

    const taskId =
      context.switchToHttp().getRequest().params.id
      ||
      context.switchToHttp().getRequest().body.id
      ;


    let isAdmin = await super.canActivate(context)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        throw new NotFoundException();
      });

    let taskOwner: boolean = await this.taskAuthorization.isTaskOwner(user.id, taskId)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        throw new NotFoundException();
      });


    return isAdmin || taskOwner;
  }
}
