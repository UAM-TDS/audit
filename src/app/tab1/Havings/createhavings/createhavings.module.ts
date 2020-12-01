import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatehavingsPageRoutingModule } from './createhavings-routing.module';

import { CreatehavingsPage } from './createhavings.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatehavingsPageRoutingModule,
    SharedModule
  ],
  declarations: [CreatehavingsPage]
})
export class CreatehavingsPageModule {}
