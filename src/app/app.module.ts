import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { SportsComponent } from './components/sports/sports.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrewskersComponent } from './components/brewskers/brewskers.component';
import { CasinoComponent } from './components/casino/casino.component';
import { SpecialsComponent } from './components/specials/specials.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StoreComponent,
    SportsComponent,
    ContactComponent,
    BrewskersComponent,
    CasinoComponent,
    SpecialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
