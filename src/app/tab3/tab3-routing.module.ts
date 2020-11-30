import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'createcompany',
    loadChildren: () => import('./Company/createcompany/createcompany.module').then( m => m.CreatecompanyPageModule)
  },  {
    path: 'edit-company',
    loadChildren: () => import('./Company/edit-company/edit-company.module').then( m => m.EditCompanyPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
