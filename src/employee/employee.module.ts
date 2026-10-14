import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service.js';
import { EmployeeController } from './employee.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Profile, ProfileSchema } from './schemas/profile.schema.js';
import { Employee, EmployeeSchema } from './schemas/employee.schema.js';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Profile.name, schema: ProfileSchema }]),
    MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }]),
  ],
  providers: [EmployeeService],
  controllers: [EmployeeController]
})
export class EmployeeModule { }
