import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main-components/navbar/navbar.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FordComponent } from './pages/ford/ford.component';
import { FiatComponent } from './pages/fiat/fiat.component';
import { VolkswagenComponent } from './pages/volkswagen/volkswagen.component';
import { ToyotaComponent } from './pages/toyota/toyota.component';
import { AudiComponent } from './pages/audi/audi.component';
import { BrandHoverComponent } from './main-components/brand-hover/brand-hover.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FordComponent,
    FiatComponent,
    VolkswagenComponent,
    ToyotaComponent,
    AudiComponent,
    BrandHoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
