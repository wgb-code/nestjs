import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateStudentDTO } from "src/dtos/create-student-dto";

@Controller('/students')
export class StudentController {

    constructor() {}

    @Get()
    async getStudents() {
        
    }

    @Post()
    async createStudent(@Body() body: CreateStudentDTO) {

    }

    @Put(':id')
    async updateStudent(@Param('id') id:string, @Body() body: any) {
        
    }

    @Delete()
    async deleteStudent(@Param('id') id:string) {

    }
}