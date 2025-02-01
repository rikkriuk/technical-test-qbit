import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateSubscribeDto {
   @IsNotEmpty()
   @IsEmail()
   @IsString()
   email: string
}
