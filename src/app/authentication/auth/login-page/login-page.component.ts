import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from 'express';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  userCookie: string = '';

  constructor(
    // private toastr: ToastrService,
    // private _router: Router,
    // // private _auth: AuthserviceService,
    // private _cookieService: CookieService,
    public dialog: MatDialog
  ) { }



  formLogin(val: any) {
    let data = val.value;
    // debugger
    // this._auth.loginUser(data).subscribe({
    //   next: res => {
    //     this.toastr.success(`User Login Sucessful!`);
    //     console.log(res);
    //     localStorage.setItem("accessToken", res.data.accessToken);
    //     // localStorage.setItem("refreshToken", res.data.refreshToken);
    //     // this._cookieService.set("accessToken",res.data.accessToken);
    //     // this._cookieService.set("refreshToken",res.data.refreshToken);
    //     this._router.navigate(['/dashboard']);
    //   },
    //   error: err => {
    //     // alert(`This is a ${err}`);
    //     this.toastr.error('Email or password is not valid!');
    //   }
    // })
  }

  // setCookie() {
  //   this._cookieService.set('user', res.accessToken);
  // }
  // getCookie() {
  //   return this._cookieService.get('user');
  // }
  // deleteCookie() {
  //   this._cookieService.delete('user');
  // }



  //this is a MatDialog
  ForgetPasswordopenDialog() {
    this.dialog.open(ForgetPasswordComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
}
