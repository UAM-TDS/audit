import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { HavingsFormComponent } from './havings-form/havings-form.component';



@NgModule({
  
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],

  declarations: [UserFormComponent, CompanyFormComponent, HavingsFormComponent],
  exports: [UserFormComponent, CompanyFormComponent, HavingsFormComponent]

})
export class SharedModule { }
