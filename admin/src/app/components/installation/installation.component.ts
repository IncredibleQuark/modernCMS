import {Component, OnInit} from '@angular/core';
import {InstallationService} from "../../services/installation/installation.service";
import {CreateAdminDto} from "../../../../../server/src/admin/create-admin.dto";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-welcome',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss']
})
export class InstallationComponent implements OnInit {

  private admin: CreateAdminDto;

  constructor(private readonly installationService: InstallationService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  checkIfInstalled() {

  }

  tryRegister(form) {

    if (form.valid) {

      this.admin = {
        name: form.controls.name.value,
        surname: form.controls.surname.value,
        email: form.controls.email.value,
        password: form.controls.password.value
      };

      this.installationService.createAdmin(this.admin).subscribe((res) => {
        console.warn(res);
        this.snackBar.open('Installed successfully', null, {duration: 4000, panelClass: 'snackbar-success'});
      }, (err) => {
        this.snackBar.open('Installation error', null, {duration: 4000, panelClass: 'snackbar-error'});
        console.warn(err)
      });

    } else {
      this.snackBar.open('Some fields are invalid.', null, {duration: 4000, panelClass: 'snackbar-error'});
    }

  }


}
