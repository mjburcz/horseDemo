import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { HorsesModule } from './horses/horses.module';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NeedsModule } from './needs/needs.module';

@NgModule({
  imports:      [ BrowserModule, CoreModule, HorsesModule, NeedsModule, AppRoutingModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }