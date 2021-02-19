import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  public user: User;
  userForm: FormGroup;
  validMessage = '';

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  submitUser(): void {
    if (this.userForm.valid) {
      this.validMessage = 'Details updated.';
      console.log(this.userForm.value);
      this.user = {
        id: this.activatedRoute.snapshot.params.id,
        name: this.userForm.value.name,
        email: this.userForm.value.email
      };
      this.userService.editUser(this.user).subscribe(
        data => {
          console.log(data);
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      );
    } else {
      this.validMessage = 'Please fill out the details before submitting.';
    }
  }

}
