import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecPage } from './sec.page';

const routes: Routes = [
  {
    path: '',
    component: SecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecPageRoutingModule {}
