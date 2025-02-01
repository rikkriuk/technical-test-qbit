import { Injectable } from '@nestjs/common';
import { CreateDatumDto } from './dto/create-datum.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class DataService {
  constructor(private prisma: PrismaService) {}

  create(createDatumDto: CreateDatumDto) {
    return this.prisma.data.create({ data: createDatumDto });
  }

  findFirst() {
    return this.prisma.data.findFirst();
  }
}
