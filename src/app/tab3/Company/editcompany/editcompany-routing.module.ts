import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditcompanyPage } from './editcompany.page';

const routes: Routes = [
    {
        path: ':name',
        component: EditcompanyPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EditcompanyPageRoutingModule {}