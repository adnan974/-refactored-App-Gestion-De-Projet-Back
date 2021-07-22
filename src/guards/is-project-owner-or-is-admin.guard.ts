import { BadRequestException, CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError, Observable } from 'rxjs';
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

  // #Action_Based_Authorization(Systeme perso) 2:
  // 1- On récupère l'id de l'utilisateur à manipuler dans la requete 
  // 2- On récupère l'id du projet à manipuler dans la requete
  // 3- On verifie si l'utilisateur est un admin
  // 4- Sinon, on Verifie si le projet appartient à l'utilisateur, 
  //    Pour cela, on utilise un service (projectAuthorization) 
  // Voir 3 pour les détails du service

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    const { user } = context.switchToHttp().getRequest();

    const projectId =
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

    let isProjectOwner: boolean = await this.projectAuthorization.isProjectOwner(user.id, projectId)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        throw new NotFoundException();
      });


    return isAdmin || isProjectOwner;



  }



}
