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
import { LoginComponent } from './components/pages/login/login.component';
import { FacebookLoginProvider, GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthService, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { SingleTourComponent } from './components/pages/single-tour/single-tour.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TourCaruselComponent } from './components/static-components/tour-carusel/tour-carusel.component';

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
    SingleDashTourComponent,
    LoginComponent,
    SingleTourComponent,
    TourCaruselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleSigninButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SocialAuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false, // Set to true if you want to automatically log in users
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider("4117695304-44q71uss00c6l1stc83t88m3ar01r9oe.apps.googleusercontent.com")
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider("1818075952029342")
          }
        ],
        onError: () => {
          debugger;
          console.error("Error on authorization service side!");
        },
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//npm install @abacritt/angularx-social-login --legacy-peer-deps
