import { Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service.js';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }


    @Post()
    createEmployee() {
        return this.employeeService.createEmployee()
    }

    @Get()
    findAllEmployee() {
        return this.employeeService.findAllEmployee()
    }
}
