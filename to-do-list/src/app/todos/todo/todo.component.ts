import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/ToDo';
import {ToDoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  toDos: Todo[];

  constructor(private toDoServce: ToDoService ) {}

  ngOnInit() {
    this.toDoServce.getToDos().subscribe(todos => {
      this.toDos = todos;
    });
  }
}
