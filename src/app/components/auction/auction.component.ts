import { Component, OnInit } from '@angular/core';
import {AuctionService} from '../../services/auction.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss']
})
export class AuctionComponent implements OnInit {
  public auctions;

  constructor(private auctionService: AuctionService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAuction(this.activatedRoute.snapshot.params.id);
  }

  getAuction(id: number){
    this.auctionService.getAuctionById(id).subscribe(
      data => {
        this.auctions = data;
      }, error => console.log()
    );
  }



}
