import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HeaderService } from './header.service';
import { CreateHeaderDto } from './dto/create-header.dto';

@Controller('api/header')
export class HeaderController {
  constructor(private readonly headerService: HeaderService) {}

  @Post()
  create(@Body() createHeaderDto: CreateHeaderDto) {
    return this.headerService.create(createHeaderDto);
  }

  @Get()
  findFirst() {
    return this.headerService.findFirst();
  }
}
