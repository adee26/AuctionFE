import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUserById(id: number){
    return this.httpClient.get('server/api/v1/users/' + id);
  }
  editUser(user: User): Observable<User>{
    // let body = JSON.stringify(user);
    return this.httpClient.put<User>('server/api/v1/users/' + user.id, user);
  }
}
