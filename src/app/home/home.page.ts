import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private authSvc: AuthService){}

  navigate(){
    this.router.navigate(['../login'])
  }

  async onLoginGoogle() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        this.router.navigate(['../home-logado']);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }
}
