import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiRestService } from "../services/api-rest.service";
import { MessagesService } from "../services/messages.service";
import { AlertController } from '@ionic/angular';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";

import { MenuController } from "@ionic/angular";
import { Storage } from "@ionic/storage";

export interface FormModel {
  captcha?: string;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  public formModel: FormModel = {};
  userForm: FormGroup;

  emailControl: AbstractControl;
  passwordControl: AbstractControl;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private menuCtrl: MenuController,
    private apiRest: ApiRestService,
    private message: MessagesService,
    private storage: Storage,
    public alertController: AlertController,
  ) {
    this.menuCtrl.enable(false);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      message: 'Confirme o Captcha antes de prosseguir.',
      buttons: ['Certo']
    });

    await alert.present();
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.userForm = this.formBuilder.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.maxLength(50)
        ])
      ],
      password: [
        "",
        Validators.compose([Validators.required, Validators.maxLength(25)])
      ]
    });
    this.emailControl = this.userForm.controls["email"];
    this.passwordControl = this.userForm.controls["password"];
  }

  async login() {
    let online = window.navigator.onLine;
    if (!online) {
      this.message.presentToast('Sem conexão com Internet', 3000);
      return;
    }
    let loading = await this.message.presentLoading('Carregando');
    await loading.present();
    const body = {
      email: this.emailControl.value,
      password: this.passwordControl.value
    };
    this.apiRest.login(body).subscribe(
      (res: any) => {
        loading.dismiss();
        if (res) {
          if (res.success) {
            this.storage.set('token', res.token);
            this.router.navigateByUrl('home-logado');
          } else {
            this.message.presentToast(
              'E-mail ou Senha incorretos',
              5000
            );
          }
        }
      },
      error => {
        console.error(error);
        loading.dismiss();
        this.message.presentToast("Error ao acesso", 5000);
      }
    );
  }
}
