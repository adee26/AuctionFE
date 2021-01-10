import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

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
}
