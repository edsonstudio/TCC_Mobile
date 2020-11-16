import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageUtils } from '../utils/localstorage';


@Component({
  selector: 'app-home-logado',
  templateUrl: './home-logado.page.html',
  styleUrls: ['./home-logado.page.scss'],
})

export class HomeLogadoPage {

  localStorage = new LocalStorageUtils();
  constructor(
    private route: Router
    ) {
  }

  async logout(){
    await this.localStorage.cleanUserLocalData();
    this.route.navigate(['./home']);
  }
}
