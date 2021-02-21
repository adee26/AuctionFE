import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../models/DialogData';
import {BiddingServiceService} from '../services/bidding-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BidDTO} from '../models/BidDTO';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  biddingForm: FormGroup;
  validMessage = '';
  bidDTO: BidDTO;
  idAuction: number;
  userId: number;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private biddingService: BiddingServiceService,
    private cookieService: CookieService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.biddingForm = new FormGroup({
      amount: new FormControl('', Validators.required)
    });
    this.idAuction = this.data.id;
    console.log(this.idAuction);
  }
  onNoClick(): void{
    this.dialogRef.close();
  }

  placeBid(){
    if (this.biddingForm.valid){
      this.validMessage = 'Bid placed successfully';
      this.userId = +this.cookieService.get('user-id');
      this.bidDTO = {
          id: this.userId,
          bid: this.biddingForm.get('amount').value
        };
      console.log(this.bidDTO);
      // console.log(idAuction);
      console.log(this.bidDTO.id);
      this.biddingService.placeBid(this.idAuction, this.bidDTO).subscribe(
        data => {
          console.log(data);
          this.biddingForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      );
    }else{
      this.validMessage = 'Please enter a valid bid.';
    }
  }

}
