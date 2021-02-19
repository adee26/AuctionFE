import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  validMessage = '';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  register(){
    if(this.registerForm.valid){
      this.validMessage = 'Registration successful';
      // @ts-ignore
      this.userService.createUser(this.registerForm.value).subscribe()(
        data => {
          console.log(data);
          this.registerForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      );
    }else{
      this.validMessage = 'Please fill out the form before submitting!';
    }
  }

}
