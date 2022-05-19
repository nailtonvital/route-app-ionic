import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrdPageRoutingModule } from './trd-routing.module';

import { TrdPage } from './trd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrdPageRoutingModule
  ],
  declarations: [TrdPage]
})
export class TrdPageModule {}
