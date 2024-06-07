import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleTourComponent } from './components/pages/single-tour/single-tour.component';

const routes: Routes = [
  {path: 'singleTour/:id',component:SingleTourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
