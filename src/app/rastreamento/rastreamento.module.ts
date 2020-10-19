import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RastreamentoPageRoutingModule } from './rastreamento-routing.module';

import { RastreamentoPage } from './rastreamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RastreamentoPageRoutingModule
  ],
  declarations: [RastreamentoPage]
})
export class RastreamentoPageModule {}
