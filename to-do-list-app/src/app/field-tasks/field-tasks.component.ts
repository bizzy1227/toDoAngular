import { Component, OnInit } from '@angular/core';
import { LIST } from '../mock-ietms';
import { ItemList } from '../itemList';

@Component({
  selector: 'app-field-tasks',
  templateUrl: './field-tasks.component.html',
  styleUrls: ['./field-tasks.component.css']
})
export class FieldTasksComponent implements OnInit {

  list = LIST;
  indOfArr: number;
  taskForUpdate: ItemList;
  textTask = '';

  constructor() { }

  ngOnInit(): void {
  }

  delete(index) {
    console.log(index)
    this.list.splice(index, 1);
  }

  moveToUpdate(elem, index) {
    console.log(elem);
    this.taskForUpdate = elem;
    console.log(index);
    this.indOfArr = index;
    this.textTask = elem.text;
    console.log(elem.text);
  }

  save(newText) {
    this.list.splice(this.indOfArr, 1, {
      text: newText
    });
  }
}
