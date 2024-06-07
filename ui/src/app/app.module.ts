import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/static-components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/static-components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleTourComponent } from './components/pages/single-tour/single-tour.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SingleTourComponent
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
