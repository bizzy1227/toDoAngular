import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-field-tasks',
  templateUrl: './field-tasks.component.html',
  styleUrls: ['./field-tasks.component.css'],
  providers: [TasksService]
})
export class FieldTasksComponent implements OnInit {

  textTask: string;
  tasks = []
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasks = this.tasksService.getTask();
    console.log(this.tasks);
  }

  delete(index: number) {
    this.tasksService.delete(index);
  }

  moveToUpdate(elem, index) {
    this.textTask = this.tasksService.moveToUpdate(elem, index);
  }

  save(newText) {
    this.tasksService.save(newText);
  }

}
