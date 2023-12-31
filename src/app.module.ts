import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './services/service.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstanceModule } from './instances/instances.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { FilterAppMiddleware } from './middlewares/filter.app.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ras_app',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ServiceModule,
    InstanceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FilterAppMiddleware).forRoutes('/');
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}
