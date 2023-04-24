import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Documentacion API Alcancia')
    .setDescription(
      'La API REST para la aplicación de presupuesto personal es un conjunto de endpoints que permiten la creación, lectura, actualización y eliminación de datos relacionados con el presupuesto personal de un usuario.  La API permitiría al usuario crear una cuenta y autenticarse mediante un sistema de autenticación seguro, lo que le daría acceso a sus propios datos de presupuesto personal.  La API podría tener endpoints para agregar y modificar ingresos y gastos, crear y administrar categorías de ingresos y gastos, así como para generar informes de presupuesto y estadísticas.  También podrían incluirse endpoints para configurar alertas y notificaciones, así como para la sincronización de datos con otras aplicaciones de presupuesto personal.',
    )
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
}
bootstrap();
