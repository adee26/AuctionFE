import { Component, OnInit } from '@angular/core';
import {Login} from '../models/login';
import {InterfaceUtil} from '../util/interfaceUtil';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {UserService} from '../services/user.service';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../models/user.model';
import {UserDTO} from '../models/UserDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  validMessage = '';
  subscription: Subscription;
  subscriptionNumber: Subscription;
  isLoggedIn: boolean;
  loginCookie: number;
  user: User;
  userDTO: UserDTO;
  id: number;
  emailUser: string;

  constructor(private userService: UserService, private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  loginAction(): void{
    if (this.loginForm.valid){
      this.subscription = this.userService.login(this.loginForm.value)
        .subscribe(data => {
          this.isLoggedIn = data;
          if (data == true){
            this.validMessage = 'Logged in successfully';
            this.subscriptionNumber = this.userService.getUserByEmail(this.loginForm.value).subscribe(data2 => {
                this.id = data2;
                this.cookieService.set('user-id', String(this.id));
                console.log(this.cookieService.get('user-id'));
              }
            );
            this.loginForm.reset();
          }else{
            this.validMessage = 'Username or password is incorrect. Please try again.';
          }
        },
          error => {
          return Observable.throw(error);
          });
    }else{
      this.validMessage = 'Form cannot be empty';
    }
  }

}
