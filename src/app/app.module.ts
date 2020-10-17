import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule,  IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// re-captcha
import { RecaptchaModule } from 'ng-recaptcha';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// api
import { IonicStorageModule } from '@ionic/storage';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesService } from './services/messages.service';
import { HTTP } from '@ionic-native/http/ngx';
import { GuardAccount } from './services/User/user.guard';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      HttpClientModule,
       RecaptchaModule.forRoot(),
        AppRoutingModule,
        IonicStorageModule.forRoot(),
        ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    MessagesService,
    GuardAccount,
    HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  exports: [ RecaptchaModule],
 schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
