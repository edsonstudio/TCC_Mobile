import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RastreamentoPage } from './rastreamento.page';

const routes: Routes = [
  {
    path: '',
    component: RastreamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RastreamentoPageRoutingModule {}
