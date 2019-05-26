import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  private valid: boolean = false;

  ngOnInit() {
  }

  login(loginForm) {
    this.valid = true;
    this.authService.authenticateUser(loginForm.value).subscribe( res => {
      console.log(res);
      if (res['success']) {

        this.authService.storeUserData(res['data']);
        this.router.navigate(['/admin']).then( () => {
          this.snackBar.open('You are logged in!', null, {duration: 4000, panelClass: 'snackbar-success'});
        });

      } else if (res['msg'] === 'Wrong password') {
        this.valid = false;
        loginForm.form.controls.password.status = 'INVALID';
        this.snackBar.open('Wrong password!', null, {duration: 4000, panelClass: 'snackbar-error'});

      } else {
        this.valid = false;
        loginForm.form.controls.email.status = 'INVALID';
        loginForm.form.controls.password.status = 'INVALID';
        this.snackBar.open('Invalid credentials!', null, {duration: 4000, panelClass: 'snackbar-error'});

      }
    }, err => {
      console.log(err);
      this.snackBar.open('Something went wrong. :(', null, {duration: 4000, panelClass: 'snackbar-error'});
    });
  }

}
