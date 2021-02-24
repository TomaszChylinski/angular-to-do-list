import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoItem } from 'src/app/models/toDo';
import { ToDoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() itemToDo: TodoItem;
  @Output() toDoItemDelete = new EventEmitter<MouseEvent>();

  constructor(private toDoService: ToDoService) {}

  ngOnInit() {}

  toggleTodo(todo) {
    console.log('show me this toggleTodo: ', todo);
    todo.completed = !todo.completed; // for ui purposes have to create ngclass
    this.toDoService
      .toggleToDoItem(todo)
      .subscribe((todo) => console.log('subscribe from toggle: ', todo));
  }

  onDeleteClick(todo) {
    this.toDoItemDelete.emit(todo);
  }
}
