import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../models/toDo';
import { ToDoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  toDoItems: TodoItem[] = [];

  constructor(private toDoService: ToDoService) {} // dependency injection 

  ngOnInit() {
   this.toDoItems = this.toDoService.getProducts();
  console.log('show me this ', this.toDoItems)

  }

    // load toDoItems
}
