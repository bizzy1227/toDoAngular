import { Component, OnInit } from '@angular/core';
import { ItemList } from '../itemList';
import { LIST } from '../mock-ietms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  text: String;
  list = LIST;

  constructor() { }

  ngOnInit(): void {
  }

  add(text: string): void {
    console.log(text);
    this.list.push({
      text: text
    });
  }
}
