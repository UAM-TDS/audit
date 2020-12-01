import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditcompanyPageRoutingModule } from './editcompany-routing.module';

import { EditcompanyPage } from './editcompany.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditcompanyPageRoutingModule,
    SharedModule
  ],
  declarations: [EditcompanyPage]
})
export class EditcompanyPageModule {}
