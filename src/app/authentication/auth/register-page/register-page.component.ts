import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {



  OnSubmit: any = {
    fullName: null,
    email: null,
    password: null,
    phone: null,
    username: null
  }



  constructor(
    // private _auth: AuthserviceService,
    // private toastr: ToastrService,
    // private _router: Router,
  ) { }

  formSubmit(val: any) {
    let data = val.value;
    // this._auth.register(data).subscribe({
    //   next: res => {
    //     this.toastr.success('User Register Sucessful!');
    //     console.log(res);
    //     this._router.navigate(['/login']);
    //   },
    //   error: err => {
    //     // alert(`This is a ${err}`);
    //     this.toastr.error('User with email or username already exists');
    //   }
    // })
  }
}

