import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from '../config/auth-constants';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { ToastService } from '../services/toast.service';
import { AlertController } from '@ionic/angular';

export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
  })

  export class LoginPage implements OnInit {
    public formModel: FormModel = {};
  postData = {
    email: '',
    password: '',
  };

  constructor(
  private router: Router,
  private authService: AuthService,
  private storageService: StorageService,
  private toastService: ToastService,
  public alertController: AlertController
  ) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      message: 'Confirme o Captcha antes de prosseguir.',
      buttons: ['Certo']
    });

    await alert.present();
  }
  ngOnInit() {}


  validateInputs() {
  console.log(this.postData);
  let email = this.postData.email.trim();
  let password = this.postData.password.trim();
  return (
  this.postData.email &&
  this.postData.password &&
  email.length > 0 &&
  password.length > 0
  );
  }

  loginAction() {
  if (this.validateInputs()) {
  this.authService.login(this.postData).subscribe(
  (res: any) => {
  if (res.userData) {
  // Storing the User data.
  this.storageService.store(AuthConstants.AUTH, res.userData);
  this.router.navigate(['../home-logado']);
  } else {
  this.toastService.presentToast('E-mail ou Senha estão incorretos.');
  }
  },
  (error: any) => {
  this.toastService.presentToast('Sem conexão.');
  }
  );
  } else {
  this.toastService.presentToast(
  'Digite seu E-mail e Senha.'
  );
  }
  }
  }
