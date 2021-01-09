import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auctions-list',
  templateUrl: './auctions-list.component.html',
  styleUrls: ['./auctions-list.component.scss']
})
export class AuctionsListComponent implements OnInit {

  public auctionList;

  constructor(private categoryService : CategoryService, private activatedRoute: ActivatedRoute, private router : Router) {
    this.getAuctionListByCategoryId(this.activatedRoute.snapshot.params['id']);
   }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (param : any) => {
        const id = param.get('id'); 
        this.getAuctionListByCategoryId(id);
      }
    );
  }

  getAuctionListByCategoryId(id : number){
    this.categoryService.getAuctionListByCategoryId(id).subscribe(
      data => this.auctionList = data,
      err => console.error(err)
    );
  }

}
