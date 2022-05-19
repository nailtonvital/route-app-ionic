import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecPageRoutingModule } from './sec-routing.module';

import { SecPage } from './sec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecPageRoutingModule
  ],
  declarations: [SecPage]
})
export class SecPageModule {}
