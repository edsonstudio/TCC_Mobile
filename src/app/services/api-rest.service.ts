import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiRestService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  private url = "https://localhost:44356/api/v1/identity";

  constructor(private http: HttpClient) {}

  public login(params: any) {
    return this.http.post(this.url + "/entrar", params, this.httpOptions);
  }

  public logout(params: any) {
    return this.http.post(this.url + "/logout", params);
  }

  public getActivities(token: string) {
    return this.http.get(this.url + "/activities?token=" + token);
  }

  public createActivity(params: any) {
    return this.http.post(this.url + "/activities", params);
  }

  public editActivity(idActivity: number, params: any) {
    return this.http.put(this.url + "/activities/" + idActivity, params);
  }

  public deleteActivity(idActivity: number, token: string) {
    return this.http.delete(
      this.url + "/activities/" + idActivity + "?token=" + token
    );
  }

  public showActivity(idActivity: number, token: string) {
    return this.http.get(
      this.url + "/activities/" + idActivity + "?token=" + token
    );
  }

  public getUser(token: string) {
    return this.http.get(this.url + "/user?token=" + token);
  }
}
