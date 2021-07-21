import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserAuthorization } from 'src/modules/authorization/user-authorization';

@Injectable()
export class IsAdminGuard implements CanActivate {

  constructor(protected userAuthorization:UserAuthorization){}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean>  {

    const { user } = context.switchToHttp().getRequest();

    let isAdmin:boolean = await this.userAuthorization.isAdmin(user.id)
    .then((res)=>{
      return res
    })
    
    return isAdmin;
  }
}
