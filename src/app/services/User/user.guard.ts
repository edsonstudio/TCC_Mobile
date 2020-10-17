import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Injectable()
export class GuardAccount implements CanActivate {

    localStorageUtils = new LocalStorageUtils();

    constructor(private router: Router){}

    async canActivate() {
        if (await this.localStorageUtils.getUserToken() !== null){
            this.router.navigate(['/home-logado']);
        }

        return true;
    }

}
