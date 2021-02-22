import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../models/toDo';
import { ToDoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  toDoItems: TodoItem[];

  constructor(private toDoService: ToDoService) {} // dependency injection

  ngOnInit() {
    this.loadToDoItems();
  }

  // load toDoItems
  loadToDoItems() {
    this.toDoService.getTodDoItems().subscribe((todo) => {
      // remeber we have to subscribe
      this.toDoItems = todo;

      console.log('Console items: ', this.toDoItems);
    });
  }

  captureToDo(todo: TodoItem) {
    console.log(' show me todo 2 ', todo)
    this.toDoService.addToDoItems(todo).subscribe((todo) => {
      this.toDoItems.push(todo);
    });
  }
}
