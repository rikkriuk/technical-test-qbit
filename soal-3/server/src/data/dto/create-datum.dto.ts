import { IsString } from 'class-validator';

export class CreateDatumDto {
  @IsString()
  experience: string;

  @IsString()
  country: string;

  @IsString()
  sold: string;

  @IsString()
  variant: string;
}
