import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Profile } from './schemas/profile.schema.js';
import { Model } from 'mongoose';
import { Employee } from './schemas/employee.schema.js';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectModel(Profile.name) private profileModel: Model<Profile>,
        @InjectModel(Employee.name) private employeeModel: Model<Employee>
    ) { }


    async createEmployee(): Promise<Employee> {
        const profile = await new this.profileModel({
            age: 18,
            qualification: "Intermediate"
        }).save()

        const employee = new this.employeeModel({
            name: "Ameer Hamza",
            profile: profile._id
        })

        return await employee.save()
    }



    async findAllEmployee() {
        const employee = await this.employeeModel.find().populate('profile').exec();
        return employee;
    }


}
