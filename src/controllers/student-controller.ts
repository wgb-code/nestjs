import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateStudentDTO } from "src/dtos/create-student-dto";
import { StudentRepository } from "src/repositories/student-repository";

@Controller('/students')
export class StudentController {

    constructor(
        private repository: StudentRepository
    ) {}

    @Get()
    async getStudents() {
        return this.repository.getAllStudent()
    }

    @Post()
    async createStudent(@Body() body: CreateStudentDTO) {
        return this.repository.createStudent(body)
    }

    @Put(':id')
    async updateStudent(@Param('id') id:string, @Body() body: any) {
        
    }

    @Delete()
    async deleteStudent(@Param('id') id:string) {
        this.repository.deleteStudent(id)
    }
}