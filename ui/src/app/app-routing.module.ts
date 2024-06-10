import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleTourComponent } from './components/pages/single-tour/single-tour.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ToursComponent } from './components/pages/tours/tours.component';
import { DestinationsComponent } from './components/pages/destinations/destinations.component';
import { NotFoundComponent } from './components/static-components/not-found/not-found.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'tours/:id', component: SingleTourComponent},
  {path: 'tours', component: ToursComponent},
  {path: 'destinations', component: DestinationsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
