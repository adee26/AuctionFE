import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

const HttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class BiddingServiceService {

  constructor(private http: HttpClient) { }

  getBiddingsByUserId(id: number){
    return this.http.get('/server/api/v1/bidding/' + id);
  }
  placeBid(id: number, bidDTO){
    return this.http.post('/server/api/v1/auction/' + id, bidDTO);
  }
}
