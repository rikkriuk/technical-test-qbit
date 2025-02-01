import { Injectable } from '@nestjs/common';
import { CreateProductDto, PaginationDto, ProductResponseDto } from './dto/create-product.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({ data: createProductDto });
  }

  async findAll(paginationDto: PaginationDto): Promise<ProductResponseDto> {
    const { page, limit } = paginationDto;
    const totalItems = await this.prisma.product.count();
    const totalPages = Math.ceil(totalItems / limit);

    const products = await this.prisma.product.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    const response: ProductResponseDto = {
      totalItems,
      totalPages,
      page,
      limit,
      products: products.map(product => ({
        id: product.id,
        title: product.title,
        image: product.image,
        price: Number(product.price),
        price_after_discount: product.priceAfterDiscount ? Number(product.priceAfterDiscount) : null,
      })),
    };

    return response;
  }
}
