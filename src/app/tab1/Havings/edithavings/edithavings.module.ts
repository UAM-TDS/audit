import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdithavingsPageRoutingModule } from './edithavings-routing.module';

import { EdithavingsPage } from './edithavings.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdithavingsPageRoutingModule,
    SharedModule
  ],
  declarations: [EdithavingsPage]
})
export class EdithavingsPageModule {}
