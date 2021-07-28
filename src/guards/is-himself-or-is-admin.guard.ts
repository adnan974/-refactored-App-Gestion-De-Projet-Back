import { BadRequestException, CanActivate, ExecutionContext, Injectable, NotFoundException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserAuthorization } from 'src/modules/authorization/user-authorization';
import { IsAdminGuard } from './is-admin.guard';

@Injectable()
export class IsHimselfOrIsAdminGuard extends IsAdminGuard implements CanActivate {

  constructor(
    protected userAuthorization: UserAuthorization
  ) {
    super(userAuthorization);
  }


  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    const { user } = context.switchToHttp().getRequest();

    const userRequestId =
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
        throw new BadRequestException();
      });


    let isHimself: boolean = await this.userAuthorization.isHimself(user.id,userRequestId)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        throw new BadRequestException();
      });
      
    return isAdmin || isHimself;
  }
}
