import { CategoryService } from './../services/category.service';
import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 public categories : any;
 
  constructor(private categoryService : CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
      this.categoryService.getCategoryList().subscribe(
        data => this.categories = data,
        err => console.error(err)
      );
  }

}
