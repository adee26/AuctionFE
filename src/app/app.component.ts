import { CategoryService } from './services/category.service';
import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AuctionFE';
  public categories;
  id: number;
  constructor(private categoryService: CategoryService, public cookieService: CookieService){
  }

  ngOnInit(){
    this.getCategories();
    this.id = +this.cookieService.get('user-id');
  }

  getCategories(){
    this.categoryService.getCategoryList().subscribe(
      data => this.categories = data,
      err => console.log(err)
    );
  }
  logout(){
    this.cookieService.set('user-id', '0');
  }
}
