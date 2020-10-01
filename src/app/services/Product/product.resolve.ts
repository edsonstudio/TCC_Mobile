import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from './product.service';

@Injectable()
export class ProductResolve implements Resolve<Product[]>{

    constructor(private productService: ProductService){}

    async resolve(route: ActivatedRouteSnapshot) {
        const prs = await this.productService.getProducts().toPromise();
        const px = prs.filter(pr => {
            const diference = new Date().getTime() - new Date(pr.registerDate).getTime();
            const diferenceDays = (diference/(1000*3600*24)).toFixed(0);
            if (Number(diferenceDays) <= 5){
                return pr;
            }
        });
        if (px.length > 5){
            px.length = 5;
        }
        return px;
    }
}
