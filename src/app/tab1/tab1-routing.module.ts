import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'createhavings',
    loadChildren: () => import('./Havings/createhavings/createhavings.module').then( m => m.CreatehavingsPageModule)
  },
  {
    path: 'edithavings',
    loadChildren: () => import('./Havings/edithavings/edithavings.module').then( m => m.EdithavingsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
