import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/ToDo';
import { ToDoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteToDo: EventEmitter<Todo> = new EventEmitter();

  constructor(private toDoService: ToDoService) {}

  ngOnInit(): void {}

  //set dynamic classes
  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };
    return classes;
  }

  onToggle(todo) {
    // Toggle in UI
    todo.completed = !todo.completed;

    // Toggle on server
    this.toDoService
      .toggleCompleted(todo)
      .subscribe((todo) => console.log(todo));
  }

    // Emit Delete event
  onDelete(todo) {
    this.deleteToDo.emit(todo);
  }
}
