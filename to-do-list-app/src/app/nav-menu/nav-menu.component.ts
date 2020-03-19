import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lookLocal(href: string) {
    if (localStorage.getItem('token') !== 'superPass') {
      alert('Зайдите в аккаунт')
    } else {
      window.location.replace(`http://localhost:4200/${href}`);
    }
  }

  removeLocal() {
    localStorage.removeItem('token');
    window.location.replace("http://localhost:4200");
  }
}
