import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SubscribeService {
  constructor(private prisma: PrismaService) {}

  async create(createSubscribeDto: CreateSubscribeDto) {
    const existingContact = await this.prisma.contact.findUnique({
      where: { email: createSubscribeDto.email },
    });

    if (existingContact) {
      throw new HttpException(
        'Email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.prisma.contact.create({ data: createSubscribeDto });
    return { message: 'Email subscribed successfully'};
  }

  findAll() {
    return this.prisma.contact.findMany();
  }
}
