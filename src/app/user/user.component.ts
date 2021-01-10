import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {BiddingServiceService} from '../services/bidding-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user;
  public biddings;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private biddingService: BiddingServiceService) {
  }

  ngOnInit(): void {
    this.getUser(this.activatedRoute.snapshot.params.id);
    this.getUserBiddings(this.activatedRoute.snapshot.params.id);
  }
  getUser(id: number){
    this.userService.getUserById(id).subscribe(
      data => {
        this.user = data;
      },
      error => console.log()
    );
  }
  getUserBiddings(id: number){
    this.biddingService.getBiddingsByUserId(id).subscribe(
      data => {
        this.biddings = data;
      },
        error => console.log()
    );
  }

}
