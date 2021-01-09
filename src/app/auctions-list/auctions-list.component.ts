import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auctions-list',
  templateUrl: './auctions-list.component.html',
  styleUrls: ['./auctions-list.component.scss']
})
export class AuctionsListComponent implements OnInit {

  public auctionList;

  constructor(private categoryService : CategoryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAuctionListByCategoryId(this.activatedRoute.snapshot.params.id);
  }

  getAuctionListByCategoryId(id : number){
    this.categoryService.getAuctionListByCategoryId(id).subscribe(
      data => this.auctionList = data,
      err => console.error(err)
    );
  }

}
