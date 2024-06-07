import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleTourComponent } from './components/pages/single-tour/single-tour.component';
import { HomeComponent } from './components/home/home.component';
import { ToursComponent } from './components/tours/tours.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { NotFoundComponent } from './components/static-components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'singleTour/:id', component: SingleTourComponent},
  {path: 'tours', component: ToursComponent},
  {path: 'destinations', component: DestinationsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
