
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'src/constants/role.enum';
import { ROLES_KEY } from 'src/decorators/roles.decorator';
import { UserRepostory } from 'src/repositories/user.repository';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector,private userRepository :UserRepostory) {}

  //#Authorization_RBAC 3):
  // Ce guard va:
  // - récupérer les metadatas avec la clé associée au roles
  // - Si y'a pas de role dans les metadatas qui sont spécifiés ca veut dire que la route
  // est accessible pour tout le monde, doc en renvoi true
  // - Sinon, on récupére le payload de la requete
  // - vérifier si le role de l'utilisateur est le même que celui dans les métadatas
  // - SI c'est le cas le guard authorise l'acces à la route.

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    //console.log(user);
    let completeUserData = await this.userRepository.findOne({where:{id:user.id},relations:["role"]});
    
    user.role = [completeUserData.role.id];

    return requiredRoles.some((roles) => user.role.includes(roles));
  }
}
