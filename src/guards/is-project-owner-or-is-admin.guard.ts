import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ProjectAuthorization } from 'src/modules/authorization/project-authorization';
import { UserAuthorization } from 'src/modules/authorization/user-authorization';
import { IsAdminGuard } from './is-admin.guard';

@Injectable()
export class IsProjectOwnerGuardOrIsAdmin extends IsAdminGuard implements CanActivate {

  constructor(
    private projectAuthorization: ProjectAuthorization,
    protected userAuthorization: UserAuthorization
  ) {
    super(userAuthorization);
  }

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    const { user } = context.switchToHttp().getRequest();

    let isAdmin = super.canActivate(context).then((res) => {
      return res;
    })

    let isProjectOwner: boolean = await this.projectAuthorization.isProjectOwner(user.id, 2).then((res) => {
      return res;
    });

    return isAdmin || isProjectOwner;

  }



}
