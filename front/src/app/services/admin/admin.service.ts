import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminApiUrl: string;
  constructor(private readonly http: HttpClient) {
    this.adminApiUrl = environment.adminApiUrl;
  }

  public getAdmins() {
    return this.http.get(`${this.adminApiUrl}/admin`);
  }
}
