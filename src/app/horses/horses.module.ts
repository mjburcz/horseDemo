import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HorsesListComponent } from './horses-list/horses-list.component';
import { FilterTextboxComponent } from './horses-list/filter-textbox.component';
import { HorsesComponent } from './horses.component';
import { HorsesRoutingModule } from './horses-routing.module';

@NgModule({
    imports: [ CommonModule, FormsModule, SharedModule, HorsesRoutingModule ],
    declarations: [ HorsesListComponent, FilterTextboxComponent, 
        HorsesComponent]
})
export class HorsesModule { }