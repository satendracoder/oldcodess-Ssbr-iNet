import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { IndexPageModule } from '../../index-page/index-page.module';
import { SharedModule } from '../../shared/shared.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerificationComponent } from './verification/verification.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    ForgetPasswordComponent,
    VerificationComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IndexPageModule,
    SharedModule
  ]
})
export class AuthModule { }
