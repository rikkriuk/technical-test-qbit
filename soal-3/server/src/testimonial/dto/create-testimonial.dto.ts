import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateTestimonialDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsUrl()
  @IsNotEmpty()
  image: string;
}

export class TestimonialResponseDto {
   totalItems: number
   totalPages: number
   page: number
   limit: number
   testimonials: CreateTestimonialDto[]
}
