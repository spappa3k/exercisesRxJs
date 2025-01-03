import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntervalsComponent } from './intervals/intervals.component';
import { HomeComponent } from './home/home.component';
import { TimerComponent } from './timer/timer.component';
import { OfComponent } from './of/of.component';
import { BehSubjectComponent } from './beh-subject/beh-subject.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { FormsModule } from '@angular/forms';
import { Prova2Componente1Component } from './prova2-componente1/prova2-componente1.component';
import { Prova2Componente2Component } from './prova2-componente2/prova2-componente2.component';

@NgModule({
  declarations: [
    AppComponent,
    IntervalsComponent,
    HomeComponent,
    TimerComponent,
    OfComponent,
    BehSubjectComponent,
    Componente1Component,
    Componente2Component,
    Prova2Componente1Component,
    Prova2Componente2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
