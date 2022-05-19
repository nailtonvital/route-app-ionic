import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrdPage } from './trd.page';

const routes: Routes = [
  {
    path: '',
    component: TrdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrdPageRoutingModule {}
