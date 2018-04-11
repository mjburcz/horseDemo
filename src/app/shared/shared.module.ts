import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize.pip';


@NgModule({
    declarations: [ CapitalizePipe ],
    exports: [ CapitalizePipe ]
})
export class SharedModule { }