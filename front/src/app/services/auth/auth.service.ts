import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authToken: string;

  constructor(private http: HttpClient,  private jwtHelper: JwtHelperService) { }

  authenticateUser(user) {
    const headers = {'Content-Type': 'application/json'};
    return this.http.post(`${environment.adminApiUrl}/signin`, user, {headers: headers});
  }

  storeUserData(token) {
    localStorage.setItem('id_token', token);
    this.authToken = token;
  }

  isLoggedIn() {
    return !this.jwtHelper.isTokenExpired(localStorage.getItem('id_token'));
  }

  loadToken() {
    this.authToken = localStorage.getItem('id_token');
  }

  logout() {
    this.authToken = null;
    localStorage.clear();
  }
}
