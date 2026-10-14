import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from "@nestjs/config"
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module.js';
import { UserModule } from './user/user.module.js';
import { EmployeeModule } from './employee/employee.module.js';
import { ProductModule } from './product/product.module.js';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    StudentModule,
    UserModule,
    EmployeeModule,
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
