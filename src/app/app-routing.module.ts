import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntervalsComponent } from './intervals/intervals.component';

const routes: Routes = [
  {
    path: "", component : HomeComponent
  },
  {
    path:"interval", component : IntervalsComponent
  },
  {
    path:"timer", component :  IntervalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
