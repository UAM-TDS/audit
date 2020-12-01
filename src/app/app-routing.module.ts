import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) 
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path:"",
    redirectTo:"login",
    pathMatch:"full"
  },
  {
    path: 'edituser',
    loadChildren: () => import('./tab3/User/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./tab3/User/create/create.module').then( m => m.CreatePageModule)
  }, 
  {
    path: 'createcompany',
    loadChildren: () => import('./tab3/Company/createcompany/createcompany.module').then( m => m.CreatecompanyPageModule)
  },
  {
    path: 'editcompany',
    loadChildren: () => import('./tab3/Company/editcompany/editcompany.module').then( m => m.EditcompanyPageModule)
  },
  {
    path: 'createhavings',
    loadChildren: () => import('./tab1/Havings/createhavings/createhavings.module').then( m => m.CreatehavingsPageModule)
  },
  {
    path: 'edithavings',
    loadChildren: () => import('./tab1/Havings/edithavings/edithavings.module').then( m => m.EdithavingsPageModule)
  }
 
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
