
import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/constants/role.enum';

//#Authorization_RBAC 2):
// Ce decorateur met dans les métadatas que le framework met a disposition
// la clé "ROLES_KEY" avec la valeur qu'on a mis dans le decorateur (voir 1) 
export const ROLES_KEY = 'roles';
export const Roles = (...roles:Role[]) => {
    return SetMetadata(ROLES_KEY, roles)
};
