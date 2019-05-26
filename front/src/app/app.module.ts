import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstallationComponent } from './components/admin/installation/installation.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { MainComponent } from './components/main/main.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppMaterialModule} from "./app-material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InstallationService} from "./services/installation/installation.service";
import {HttpClientModule} from "@angular/common/http";
import {DashboardComponent} from "./components/admin/dashboard/dashboard.component";
import {AuthComponent} from "./components/admin/auth/auth.component";
import {AuthService} from "./services/auth/auth.service";
import {JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import {AdminService} from "./services/admin/admin.service";

export function jwtTokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    InstallationComponent,
    PageNotFoundComponent,
    MainComponent,
    DashboardComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter,
        whitelistedDomains: [],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [InstallationService, AuthService, JwtHelperService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
