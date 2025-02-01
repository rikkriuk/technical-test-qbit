import { Injectable } from '@nestjs/common';
import { CreateHeaderDto } from './dto/create-header.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class HeaderService {
  constructor(private prisma: PrismaService) {}

  create(createHeaderDto: CreateHeaderDto) {
    return this.prisma.header.create({ data: createHeaderDto });
  }

  findFirst() {
    return this.prisma.header.findFirst();
  }
}
