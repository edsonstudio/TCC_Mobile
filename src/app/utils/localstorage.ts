import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
export class LocalStorageUtils {

    public async cleanUserLocalData() {
        await Storage.remove({key: 'ecom.token'});
        await Storage.remove({key: 'ecom.user'});
    }

    async saveUserLocalData(response) {
        this.saveUserToken(response.accessToken);
        this.saveUser(response.userToken);
       }

    public async getUserToken(): Promise<string> {
        const ret = await Storage.get({ key: 'ecom.token' });
        return ret.value;
    }

    public async getUser() {
        const ret = await Storage.get({ key: 'ecom.user' });
        return ret.value;
    }

    public async saveUserToken(token: string) {
         await Storage.set({
            key: 'ecom.token',
            value: token
        });
    }

    public async saveUser(user: string) {
        await Storage.set({
            key: 'ecom.user',
            value: user
          });
    }

}
