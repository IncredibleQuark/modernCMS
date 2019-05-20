import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {CreateAdminDto} from "../../../../../server/src/admin/create-admin.dto";

@Injectable({
  providedIn: 'root'
})
export class InstallationService {

  adminApiUrl: string;

  constructor(private readonly http: HttpClient) {
    this.adminApiUrl = environment.adminApiUrl;
  }

  createAdmin(createAdminDto: CreateAdminDto) {
    return this.http.post(`${this.adminApiUrl}`, createAdminDto);
  }
}
