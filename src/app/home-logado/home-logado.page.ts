import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LocalStorageUtils } from '../utils/localstorage';


@Component({
  selector: 'app-home-logado',
  templateUrl: './home-logado.page.html',
  styleUrls: ['./home-logado.page.scss'],
})

export class HomeLogadoPage {
  public authUser: any;

  localStorage = new LocalStorageUtils();
  constructor(
    public authSvc: AuthService,
    private route: Router
    ) {
  }

  async logout(){
    await this.localStorage.cleanUserLocalData();
    this.route.navigate(['/login']);
  }
}
