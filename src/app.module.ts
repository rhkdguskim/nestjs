import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Cat} from './cat/entity/cat.entity'
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entity/user.entity';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 13306,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [Cat, User],
    synchronize: true, // 운영모드일때는 사용하지 않는다.
  }),
    CatModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats');
  }
}
