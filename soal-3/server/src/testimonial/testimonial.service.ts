import { Injectable } from '@nestjs/common';
import { CreateTestimonialDto, TestimonialResponseDto } from './dto/create-testimonial.dto';
import { PaginationDto } from 'src/product/dto/create-product.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TestimonialService {
  constructor(private prisma: PrismaService) {}

  create(createTestimonialDto: CreateTestimonialDto) {
    return this.prisma.testimonial.create({ data: createTestimonialDto });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;

    const totalItems = await this.prisma.testimonial.count();
    const totalPages = Math.ceil(totalItems / limit);

    const testimonials = await this.prisma.testimonial.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    const response: TestimonialResponseDto = {
      totalItems,
      totalPages,
      page,
      limit,
      testimonials: testimonials.map(testimonial => ({
        name: testimonial.name,
        message: testimonial.message,
        title: testimonial.title,
        image: testimonial.image,
      })),
    };

    return response;
  }
}
