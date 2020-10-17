import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';
import { BaseService } from '../base.service';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';

@Injectable({
    providedIn: 'root'
})
export class AccountService extends BaseService {

    constructor(private http: HTTP)
    {
        super();
        this.http.setDataSerializer('json');
    }

    async Login(user: User) {
        let response;
        await this.http
            .post(`${this.UrlAuth}/entrar`, user, { headers: 'Content-Type: application/json' })
            .then(res => response = JSON.parse(res.data) )
            .catch(this.serviceError);

        console.log('Resposta do login: ', response);
        return response;
    }

}
