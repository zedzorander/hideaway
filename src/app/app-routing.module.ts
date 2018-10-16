import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { SpecialsComponent } from './components/specials/specials.component';
import { SportsComponent } from './components/sports/sports.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrewskersComponent } from './components/brewskers/brewskers.component';
import { CasinoComponent } from './components/casino/casino.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'store', component: StoreComponent },
  { path: 'specials', component: SpecialsComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'brewskers', component: BrewskersComponent },
  { path: 'casino', component: CasinoComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
