
import { AuctionService } from './../services/auction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction-thubmnail',
  templateUrl: './auction-thubmnail.component.html',
  styleUrls: ['./auction-thubmnail.component.scss']
})
export class AuctionThubmnailComponent implements OnInit {

  public auctions;
  public recentlyAuctions;
  public endingAuctions;
  public recentlyEndedAuctions;
   
  constructor(private auctionService : AuctionService) { }

  ngOnInit(): void {
    this.getAuctions();
    this.getRecentlyAuctions();
    this.getEndingAuctions();
    this.getRecentlyEnded();
  }

  getAuctions( ){
    this.auctionService.getAuctions().subscribe(
      data  => this.auctions = data,
      err => console.error(err)
    );
  }
  getRecentlyAuctions(){
    this.auctionService.getRecentlyAddeAuctions().subscribe(
      data => this.recentlyAuctions = data,
      err => console.error(err)
    );
  }
  
  getEndingAuctions(){
    this.auctionService.getEndingAuctions().subscribe(
      data => this.endingAuctions = data,
      err => console.error(err)
    );
  }

  getRecentlyEnded(){
    this.auctionService.getRecentlyEndedAuctions().subscribe(
      data => this.recentlyEndedAuctions = data,
      err => console.error(err)
    );
  }

}
