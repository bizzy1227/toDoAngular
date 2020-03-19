import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
  providers: [UserDataService]
})
export class LoginUserComponent implements OnInit {

  constructor(router: Router, private uds: UserDataService) { }

  ngOnInit(): void {

  }
  router: Router
  sendValidate(login: string, password: string) {
    console.log(login);
    console.log(password);
    if (login === this.uds.login && password === this.uds.password) {
      localStorage.setItem('token', 'superPass');
      window.location.replace("http://localhost:4200/todo");
    } else {
      alert('Вы ввели не правельный логи или пароль. Смотрите placeholder')
    }
  }
}
