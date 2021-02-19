import { Subscription } from 'rxjs';

import { CategoryService } from './services/category.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import {AuctionService} from './services/auction.service';
import { AuctionComponent } from './components/auction/auction.component';

import { HomeComponent } from './home/home.component';
import { AuctionThubmnailComponent } from './auction-thubmnail/auction-thubmnail.component';
import {MatMenuModule} from '@angular/material/menu';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuctionsListComponent } from './auctions-list/auctions-list.component';
import {CookieService} from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AuctionComponent,
    HomeComponent,
    AuctionThubmnailComponent,
    UserComponent,
    EditUserComponent,
    AuctionThubmnailComponent,
    AuctionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    RouterModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuctionService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
