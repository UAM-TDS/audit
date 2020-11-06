import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';



@NgModule({
  
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],

  declarations: [UserFormComponent],
  exports: [UserFormComponent]

})
export class SharedModule { }
