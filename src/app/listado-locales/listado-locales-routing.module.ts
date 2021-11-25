import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoLocalesPage } from './listado-locales.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoLocalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoLocalesPageRoutingModule {}
