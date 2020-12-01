import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdithavingsPage } from './edithavings.page';

const routes: Routes = [
  {
    path: ':id',
    component: EdithavingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdithavingsPageRoutingModule {}
