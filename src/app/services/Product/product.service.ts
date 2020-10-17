import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Product } from 'src/app/models/Product';
import { v4 as Guid } from 'uuid';
import { BaseService } from '../base.service';

@Injectable({
    providedIn: 'root'
})
export class ProductService extends BaseService{

    constructor(private http: HTTP) {
        super();
    }

    async getProducts(): Promise<Product[]> {
        return await this.http.get(`${this.UrlAPIV1}/Products`, {} , { headers: 'Content-Type: application/json' })
            .then(success => JSON.parse(success.data))
            .catch(error => console.log(error));
    }

    async getProduct(idT: typeof Guid): Promise<Product>{
        return await this.http.get(`${this.UrlAPIV1}/products/`, { id: idT } , { headers: 'Content-Type: application/json' })
        .then(success => JSON.parse(success.data))
        .catch(error => console.log(error));
    }
}
