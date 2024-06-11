import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/static-components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/static-components/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ToursComponent } from './components/pages/tours/tours.component';
import { DestinationsComponent } from './components/pages/destinations/destinations.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { NotFoundComponent } from './components/static-components/not-found/not-found.component';
import { DashTourComponent } from './components/dashboard/dash-tour/dash-tour.component';
import { DashCommentComponent } from './components/dashboard/dash-comment/dash-comment.component';
import { SingleDashTourComponent } from './components/dashboard/dash-tour/single-dash-tour/single-dash-tour.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ToursComponent,
    DestinationsComponent,
    ContactsComponent,
    AboutUsComponent,
    NotFoundComponent,
    DashTourComponent,
    DashCommentComponent,
    SingleDashTourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
