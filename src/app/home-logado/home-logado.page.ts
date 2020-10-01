import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



import { User } from './../shared/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-logado',
  templateUrl: './home-logado.page.html',
  styleUrls: ['./home-logado.page.scss'],
})

export class HomeLogadoPage   {
  public authUser: any;

  // user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(public authSvc: AuthService) {}

}
