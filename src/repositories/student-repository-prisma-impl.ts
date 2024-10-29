import { CreateStudentDTO } from "src/dtos/create-student-dto";
import { StudentRepository } from "./student-repository";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { randomUUID } from "crypto";

@Injectable()
export class StudentRepositoryPrismaImpl implements StudentRepository {

    constructor(
        private prismaService: PrismaService
    ) {}

    async getAllStudent(): Promise<CreateStudentDTO[]> {
        return await this.prismaService.students.findMany()
    }

    async createStudent(body: CreateStudentDTO): Promise<any> {
        const student = await this.prismaService.students.create({
            data: {
                id: randomUUID(),
                name: body.name,
                email: body.email,
                age: body.age
            }
        })

        return {
            'message': 'Student successfully entered',
            'data': student
        }
    }
    updateStudent(id: string, body: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async deleteStudent(id: string): Promise<void> {
        await this.prismaService.students.delete({
            where: {
                id: id
            }
        })
    }

}