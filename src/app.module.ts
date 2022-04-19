import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { VprasanjaController } from './vprasanja/vprasanja.controller';
import { VprasanjaModule } from './vprasanja/vprasanja.module';

@Module({
  imports: [
    UserModule,
    VprasanjaModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'node22',
      autoLoadEntities: true,
      entities: [],
      synchronize: true,
    }),
    AuthModule,
    CommonModule,
  ],
  controllers: [AppController, VprasanjaController],
  providers: [AppService],
})
export class AppModule {}
