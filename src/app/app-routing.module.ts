import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {AuctionComponent} from './components/auction/auction.component';


const routes: Routes = [
  
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path: '', component: HomeComponent},
  { path: 'auction/:id', component: AuctionComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
