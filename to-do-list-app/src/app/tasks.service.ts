import { Injectable } from '@angular/core';
import { LIST } from './mock-ietms';
import { ItemList } from './itemList';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  list = LIST;
  indOfArr: number;
  taskForUpdate: ItemList;
  textTask = '';

  getTask() {
    return this.list;
  }

  add(text: string): void {
    console.log(text);
    this.list.push({
      text: text
    });
  }

  delete(index) {
    console.log(index)
    this.list.splice(index, 1);
  }

  moveToUpdate(elem, index) {
    this.taskForUpdate = elem;
    this.indOfArr = index;
    this.textTask = elem.text;
    return this.textTask
  }

  save(newText) {
    this.list.splice(this.indOfArr, 1, {
      text: newText
    });
  }

  constructor() { }
}
