
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
// Ce guard fonctionne avec le JWT strategy (voir jwt-auth.strategy)
export class JwtAuthGuard extends AuthGuard('jwt') {}
