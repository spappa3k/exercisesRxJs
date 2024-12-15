import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntervalsComponent } from './intervals/intervals.component';
import { HomeComponent } from './home/home.component';
import { TimerComponent } from './timer/timer.component';
import { OfComponent } from './of/of.component';

@NgModule({
  declarations: [
    AppComponent,
    IntervalsComponent,
    HomeComponent,
    TimerComponent,
    OfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
