import { IsString, IsUrl, MaxLength } from 'class-validator';

export class CreateHeaderDto {
  @IsString()
  @MaxLength(100)
  title: string;

  @IsString()
  @MaxLength(255)
  description: string;

  @IsUrl()
  banner: string;
}