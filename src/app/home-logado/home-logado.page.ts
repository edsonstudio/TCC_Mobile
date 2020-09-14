import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from '../config/auth-constants';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { ToastService } from '../services/toast.service';


import { User } from './../shared/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-logado',
  templateUrl: './home-logado.page.html',
  styleUrls: ['./home-logado.page.scss'],
})

export class HomeLogadoPage   {
  public authUser: any;

  user$: Observable<User>;
  constructor(public authSvc: AuthService) {}

}
