import { ProductService } from './../services/Product/product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovidadesPageRoutingModule } from './novidades-routing.module';

import { NovidadesPage } from './novidades.page';
import { ProductResolve } from '../services/Product/product.resolve';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovidadesPageRoutingModule
  ],
  declarations: [NovidadesPage],
  providers: [ProductService, ProductResolve]
})
export class NovidadesPageModule {}
