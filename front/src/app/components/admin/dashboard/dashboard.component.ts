import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../services/admin/admin.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  admins: any;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getAdmins();
  }

  private getAdmins() {
    this.adminService.getAdmins().subscribe( (res: any) => {
      this.admins = res.data;
    });
  }

}
