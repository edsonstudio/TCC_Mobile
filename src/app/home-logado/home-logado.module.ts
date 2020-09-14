import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeLogadoPageRoutingModule } from './home-logado-routing.module';

import { HomeLogadoPage } from './home-logado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeLogadoPageRoutingModule
  ],
  declarations: [HomeLogadoPage]
})
export class HomeLogadoPageModule {}
