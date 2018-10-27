import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderHomeComponent } from './components/headers/header-home/header-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { SportsComponent } from './components/sports/sports.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrewskersComponent } from './components/brewskers/brewskers.component';
import { CasinoComponent } from './components/casino/casino.component';
import { SpecialsComponent } from './components/specials/specials.component';
import { HeaderOtherComponent } from './components/headers/header-other/header-other.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderHomeComponent,
    FooterComponent,
    HomeComponent,
    StoreComponent,
    SportsComponent,
    ContactComponent,
    BrewskersComponent,
    CasinoComponent,
    SpecialsComponent,
    HeaderOtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
