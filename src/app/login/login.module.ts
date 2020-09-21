import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { LoginPage } from "./login.page";

import { RecaptchaModule, RecaptchaFormsModule,  } from 'ng-recaptcha';

const routes: Routes = [
  {
    path: "",
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
