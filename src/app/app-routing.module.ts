import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/horses'},
    { path: '**', pathMatch: 'full', redirectTo: '/horses' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], 
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}