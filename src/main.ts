import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(process.env.GLOBAL_PREFIX);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('App-gestion-projet')
    .setDescription(
      'Cette API est une API RESTFull qui founit des informations dans le contexte d\'une application de gestion de projet. ' +
      'Vous y retrouverez des Endpoint qui permettront l\'accès à differentes ressources ' +
      'où vous pourrez y faire des opérations de CRUD. ' +
      'Un système d\'authentification (avec du JWT) existe ainsi qu un système d\'authorisation. ' +
      'Autrement dit l acces aux ressources demandera de se connecter avec un login est un mot de passe. ' +
      'Les utilisateurs auront un role (admin ou user). Un admin pourra manipuler toutes les ressources sans restriction, ' +
      'alors q\'un user sera limité (ex. Il peut supprimer seulement les tâches qu il a crée).'
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);



  await app.listen(3001);
}
bootstrap();
