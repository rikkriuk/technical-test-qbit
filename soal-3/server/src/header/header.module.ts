import { Module } from '@nestjs/common';
import { HeaderService } from './header.service';
import { HeaderController } from './header.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [HeaderController],
  providers: [HeaderService, PrismaService],
})
export class HeaderModule {}
