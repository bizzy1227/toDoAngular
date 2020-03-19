import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  login = '123';
  password = '123';
  constructor() { }

  sendNewData(newLog, newPass) {
    this.login = newLog;
    this.password = newPass
    console.log(this.login);
  }
}
