import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { GestureController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiRestService } from '../../services/api-rest.service';
import { MessagesService } from '../../services/messages.service';
import { AlertController } from '@ionic/angular';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AccountService } from '../../services/User/user.service';
import { ProductService } from '../../services/Product/product.service';

export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements AfterViewInit, OnInit {
  public formModel: FormModel = {};
  userForm: FormGroup;
  emailControl: AbstractControl;
  passwordControl: AbstractControl;

  @ViewChild('drawer', { read: ElementRef}) drawer: ElementRef;
  @Output('openStateChanged') openState: EventEmitter<boolean> = new EventEmitter();

  isOpen = false;
  openHeight = 0;

  constructor(
    private plt: Platform,
    private gestureCtrl: GestureController,
    public router: Router,
    private formBuilder: FormBuilder,
    private menuCtrl: MenuController,
    private apiRest: ApiRestService,
    private accountSerivce: AccountService,
    private message: MessagesService,
    private storage: Storage,
    public alertController: AlertController,
    private productService: ProductService) {
      this.menuCtrl.enable(false);
    }

    ngOnInit() {
      this.initForm();
    }

    // Efeito scroll
  async ngAfterViewInit() {
    const drawer = this.drawer.nativeElement;
    this.openHeight = (this.plt.height() / 100) * 70;

    const gesture = await this.gestureCtrl.create({
      el: drawer,
      gestureName: 'swipe',
      direction: 'y',
      onMove: ev => {
        // console.log(ev);
        if (ev.deltaY < -this.openHeight) return;
        drawer.style.transform = `translateY(${ev.deltaY}px)`;
      },
      onEnd: ev => {
        if (ev.deltaY < -50 && !this.isOpen){
          drawer.style.transition = '.4s ease-out';
          drawer.style.transform = `translateY(${-this.openHeight}px) `;
          this.openState.emit(true);
          this.isOpen = true;
        } else if (ev.deltaY > 50 && this.isOpen){
          drawer.style.transition = '.4s ease-out';
          drawer.style.transform = '';
          this.openState.emit(false);
          this.isOpen = false;
        }
      }
    });
    gesture.enable(true);
  }

  toggleDrawer() {
    const drawer = this.drawer.nativeElement;
    this.openState.emit(!this.isOpen);
    if (this.isOpen){
      drawer.style.transition = '.4s ease-out';
      drawer.style.transform = '';
      this.isOpen = false;
    } else{
      drawer.style.transition = '.4s ease-in';
      drawer.style.transform = `translateY(${-this.openHeight}px) `;
      this.isOpen = true;
    }
  }

  // formulário validação
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      message: 'Confirme o Captcha antes de prosseguir.',
      buttons: ['Certo']
    });

    await alert.present();
  }

  private initForm() {
    this.userForm = this.formBuilder.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.maxLength(50)
        ])
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(25)])
      ]
    });
    this.emailControl = this.userForm.controls.email;
    this.passwordControl = this.userForm.controls.password;
  }

   async login() {
    const online = window.navigator.onLine;
    if (!online) {
      this.message.presentToast('Sem conexão com Internet', 3000);
      return;
    }
    const body = {
      email: this.emailControl.value,
      password: this.passwordControl.value
    };

    const result = await this.accountSerivce.Login(body);

    if (result){
      if (result.success){
        this.accountSerivce.LocalStorage.saveUserLocalData(result.data);
        this.message.presentToast('Fez login');
        this.router.navigateByUrl('home-logado');
        await this.productService.getProducts();
       }
      }
      else {
        this.message.presentToast('Email e/ou senha incorreto(s)', 5000);
      }
    }
}
