import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleTourComponent } from './components/pages/single-tour/single-tour.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ToursComponent } from './components/pages/tours/tours.component';
import { DestinationsComponent } from './components/pages/destinations/destinations.component';
import { NotFoundComponent } from './components/static-components/not-found/not-found.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { DashTourComponent } from './components/dashboard/dash-tour/dash-tour.component';
import { SingleDashTourComponent } from './components/dashboard/dash-tour/single-dash-tour/single-dash-tour.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DashCommentComponent } from './components/dashboard/dash-comment/dash-comment.component';
import { adminGuard, authGuard, expireGuard } from './guards/auth.guard';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { DashemailComponent } from './components/dashboard/dashemail/dashemail.component';
import { DashadressComponent } from './components/dashboard/dashadress/dashadress/dashadress.component';
import { DashcontactComponent } from './components/dashboard/dashcontact/dashcontact/dashcontact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard, expireGuard] },
  { path: 'toursdash/:id', component: SingleDashTourComponent, canActivate: [authGuard, expireGuard, adminGuard] },
  { path: 'commentdash', component: DashCommentComponent, canActivate: [authGuard, expireGuard, adminGuard] },
  { path: 'toursdash', component: DashTourComponent, canActivate: [authGuard, expireGuard, adminGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tours/:id', component: SingleTourComponent, canActivate: [authGuard, expireGuard] },
  { path: 'tours', component: ToursComponent, canActivate: [authGuard, expireGuard] },
  { path: 'destinations', component: DestinationsComponent, canActivate: [authGuard, expireGuard] },
  { path: 'contacts', component: ContactsComponent, canActivate: [authGuard, expireGuard] },
  { path: 'about-us', component: AboutUsComponent, canActivate: [authGuard, expireGuard] },
  {path: 'emailadressdash', component: DashemailComponent}, 
  {path: 'addressdash', component: DashadressComponent},
  {path: 'contactdash', component: DashcontactComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
