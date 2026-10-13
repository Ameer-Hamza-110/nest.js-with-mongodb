import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentService } from './student.service.js';
import { Student } from './student.schema.js';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Post()
    async addStudent(@Body() data: Partial<Student>) {
        return this.studentService.createStudent(data)
    }

    @Get()
    async getStudents() {
        return this.studentService.getAllStudents();
    }

    @Get(":id")
    async getOneStudent(@Param("id") id: string) {
        return this.studentService.getStudentById(id);
    }
}
