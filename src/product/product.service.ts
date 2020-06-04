import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';

@Injectable()
export class ProductService {

    products: Array<Product> = [];

    constructor() {
        let product = new Product();
        product.id = 1;
        product.name = 'Cerveja Heineken';
        product.description = 'Cerveja Heineken 330 ML Garrafa não retornável';
        product.price = 2.99;
        product.brand = 'Heineken';

        this.products.push(product);
    }

    findAll() {
        return this.products;
    }

    save(product: Product) {
        this.products.push(product);
    }

}
