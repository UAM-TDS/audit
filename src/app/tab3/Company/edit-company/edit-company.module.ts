import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCompanyPageRoutingModule } from './edit-company-routing.module';

import { EditCompanyPage } from './edit-company.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCompanyPageRoutingModule
  ],
  declarations: [EditCompanyPage]
})
export class EditCompanyPageModule {}
