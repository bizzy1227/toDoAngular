import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  providers: [TasksService]
})
export class InputFieldComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {

  }

  add(text: string){
    this.tasksService.add(text);
  }

}
