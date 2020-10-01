import { ProductService } from './../services/Product/product.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute} from '@angular/router';
import { Product } from '../models/Product';


@Component({
  selector: 'app-novidades',
  templateUrl: './novidades.page.html',
  styleUrls: ['./novidades.page.scss'],
})
export class NovidadesPage implements OnInit {

  images = environment.images;
  products: Product[];

  constructor(private route: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.route.snapshot.data.product;
    this.GetproductBydate();
    console.log(this.products.length);
  }

   GetproductBydate() {

    }

}
