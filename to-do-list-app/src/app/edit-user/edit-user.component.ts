import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [UserDataService]
})
export class EditUserComponent implements OnInit {

  login = this.uds.login;
  password = this.uds.login;

  constructor(private uds: UserDataService) {
  }
  ngOnInit(): void {
  }

  sendNewData(newLog, newPass) {
    this.uds.sendNewData(newLog, newPass);
  }
}
