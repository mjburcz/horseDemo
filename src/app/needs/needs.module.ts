import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { NeedsComponent } from './needs.component';
import { NeedsRoutingModule } from './needs-routing.module';

@NgModule({
    imports: [ CommonModule, FormsModule, SharedModule, NeedsRoutingModule ],
    declarations: [ NeedsComponent ]
})
export class NeedsModule { }