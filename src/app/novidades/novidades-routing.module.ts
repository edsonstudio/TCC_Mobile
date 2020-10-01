import { ProductResolve } from './../services/Product/product.resolve';
import { Product } from 'src/app/models/Product';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovidadesPage } from './novidades.page';

const routes: Routes = [
  {
    path: '',
    component: NovidadesPage,
    resolve: {product: ProductResolve}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovidadesPageRoutingModule {}
