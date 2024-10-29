import { IsEmail, IsNotEmpty, IsNumber, Length } from "class-validator"

export class CreateStudentDTO {

    @IsNotEmpty({
        message: 'Name is mandatory'
    })
    @Length(3, 60, {
        message: "The name must be between 3 and 60 letters"
    })
    name?: string

    @IsNotEmpty({
        message: 'Email is mandatory'
    })
    @IsEmail()
    email?: string

    @IsNumber()
    age?: number
}