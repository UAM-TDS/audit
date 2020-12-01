import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatehavingsPage } from './createhavings.page';

const routes: Routes = [
  {
    path: '',
    component: CreatehavingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatehavingsPageRoutingModule {}
