import { IsOptional, IsString, IsNumber, IsUrl } from 'class-validator';

export class CreateProductDto {
   @IsString()
   title: string;

   @IsUrl()
   image: string;

   @IsNumber()
   price: number;

   @IsOptional()
   @IsNumber()
   price_after_discount?: number | null;
}

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  page?: number = 1;

  @IsOptional()
  @IsNumber()
  limit?: number = 5;
}


export class ProductResponseDto {
   totalItems: number;
   totalPages: number;
   page: number;
   limit: number;
   products: CreateProductDto[];
}
 