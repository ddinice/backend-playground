import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        NODE_ENV: Joi.string().valid('local', 'dev', 'prod').required(),
      }),
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    UsersModule,
  ],
})
export class AppModule {}
