import { IonicModule } from '@ionic/angular';
import { DrawerComponent } from './drawer/drawer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecaptchaModule, RecaptchaFormsModule,  } from 'ng-recaptcha';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { AccountService } from '../services/User/user.service';

const routes: Routes = [
  {
    path: "",
    component: DrawerComponent
  }
];

@NgModule({
  declarations: [DrawerComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [DrawerComponent],
  providers: [AccountService],
})
export class SharedComponentsModule { }
