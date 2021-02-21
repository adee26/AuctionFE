import { Component, OnInit } from '@angular/core';
import {AuctionService} from '../../services/auction.service';
import {ActivatedRoute} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogBoxComponent} from '../../dialog-box/dialog-box.component';


@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss']
})
export class AuctionComponent implements OnInit {
  public auctions;
  closeResult = '';
  id: number;

  constructor(private auctionService: AuctionService, private activatedRoute: ActivatedRoute,
              private cookieService: CookieService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAuction(this.activatedRoute.snapshot.params.id);
    console.log(this.cookieService.get('user-id'));
    this.id = this.activatedRoute.snapshot.params.id;
  }

  getAuction(id: number){
    this.auctionService.getAuctionById(id).subscribe(
      data => {
        this.auctions = data;
      }, error => console.log()
    );
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      // width: '500px',
      data: {id: this.id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



}
