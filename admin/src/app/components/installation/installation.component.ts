import {Component, HostBinding, OnInit} from '@angular/core';
import {InstallationService} from "../../services/installation/installation.service";
import {CreateAdminDto} from "../../../../../server/src/admin/create-admin.dto";

@Component({
  selector: 'app-welcome',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss']
})
export class InstallationComponent implements OnInit {

  admin: CreateAdminDto;

  constructor(private readonly installationService: InstallationService) {
  }

  ngOnInit() {
  }

  tryRegister(form) {
    console.warn(form);
    console.warn(form.controls);
    console.warn(form.valid);

    if (form.valid) {
      this.admin = {
        name: form.controls.name.value,
        surname: form.controls.surname.value,
        email: form.controls.email.value,
        password: form.controls.password.value
      };
      this.installationService.createAdmin(this.admin).subscribe( (res) => {
        console.warn(res);
      }, (err) => {console.warn(err)});
    } else {

    }
  }


}
