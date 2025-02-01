import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeaderModule } from './header/header.module';
import { DataModule } from './data/data.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { TestimonialModule } from './testimonial/testimonial.module';
import { SubscribeModule } from './subscribe/subscribe.module';

@Module({
  imports: [HeaderModule, DataModule, CategoryModule, ProductModule, TestimonialModule, SubscribeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
