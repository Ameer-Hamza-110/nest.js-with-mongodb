import { Module } from '@nestjs/common';
import { UserService } from './user.service.js';
import { UserController } from './user.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './schemas/user.schema.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: userSchema }])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule { }
