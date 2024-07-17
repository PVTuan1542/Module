import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import dataSource, { dataSourceOptions } from './config/ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserModule } from 'modules/user/user.module';
import { AuthModule } from 'modules/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: DataSource,
    inject: [],
    useFactory: async () => { 
      try {
        await dataSource.initialize();
        console.log('Database connected successfully');
      } catch (error) {
        console.log('Error connecting to database');
        throw error;
      }
    },
  }],
})

export class AppModule {}
