import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuctionComponent } from './components/auction/auction.component';
import { AuctionsListComponent } from './auctions-list/auctions-list.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {AuthenticationGuard} from './authentication.guard';



const routes: Routes = [

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'auction/:id', component: AuctionComponent },
  { path: 'category/:id', component: AuctionsListComponent, pathMatch: 'full' },
  { path: 'auction/:id', component: AuctionComponent, canActivate: [AuthenticationGuard]},
   { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
