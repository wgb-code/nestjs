import { PartialType } from "@nestjs/mapped-types";
import { CreateStudentDTO } from "./create-student-dto";

export class UpdateStudantDTO extends PartialType(CreateStudentDTO){ }