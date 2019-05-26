import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public isLoggedIn(): boolean {
    return false;
  }

  authenticateUser(user) {
    const headers = {'Content-Type': 'application/json'};
    return this.http.post(`${environment.adminApiUrl}/authenticate`, user, {headers: headers});
  }
}
