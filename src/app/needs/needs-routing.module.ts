import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NeedsComponent } from '../needs/needs.component';

const routes: Routes = [
    { path: 'needs/:id', component: NeedsComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ], 
    exports: [ RouterModule ]
})
export class NeedsRoutingModule {

}