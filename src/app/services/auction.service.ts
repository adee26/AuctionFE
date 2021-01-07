import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuctionService {

  constructor(private http: HttpClient) { }

  getAuctions(){
    return this.http.get('/server/api/v1/auctions');
  }

  getAuctionById(id: number){
    return this.http.get('/server/api/v1/auction/' + id);
  }
}
