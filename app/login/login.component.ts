import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

import { Router } from '@angular/router';
import { UserService } from "./../user/user.service";
import { Http } from '@angular/http';
import { AuthService } from "../shared/auth.service";

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styles: [`
    input.ng-touched.ng-invalid{
      border:1px solid red;
    }
  `],
  providers:[UserService]
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  }

  constructor(private _userService: UserService, private router: Router, private authService: AuthService){}

  onSubmit(form:NgForm){
    console.log(form.value);

    this.authService.signinUser(form.value);

    //alert("Berhasil login");
    this.router.navigate(['timeline']);
  }
}
