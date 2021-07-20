import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants/jwt.constants';
import { JwtStrategy } from 'src/stategies/jwt-auth.strategy';
import { AuthService } from '../../services/auth/auth.service';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';

@Module({
  imports:[UserModule,
    JwtModule.register({
    // TODO mettre le secret dans un endroit sécurité. La doc de nest parle d'utiliser
    // un secret vault (Se renseigner), ou une variable d'environnement
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy]

})
export class AuthModule {}
