import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ProductDto } from './product.dto';
import { plainToClass } from "class-transformer";

@Controller('products')
export class ProductController {

    constructor(private readonly service: ProductService) {
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Post()
    save(@Body() productDto: ProductDto) {
        const product = plainToClass(Product, productDto);
        return this.service.save(product);
    }

}
