import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HorsesListComponent } from './horses-list/horses-list.component';
import { FilterTextboxComponent } from './horses-list/filter-textbox.component';
import { HorsesComponent } from './horses.component';

const routes: Routes = [
    { path: 'horses', component: HorsesComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ], 
    exports: [ RouterModule ]
})
export class HorsesRoutingModule {}