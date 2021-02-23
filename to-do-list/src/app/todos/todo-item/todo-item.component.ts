import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { emit } from 'process';
import { TodoItem } from 'src/app/models/toDo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() itemToDo: TodoItem;
  @Output() toDoItemDelete = new EventEmitter<MouseEvent>();


  constructor() {}

  ngOnInit() {}


  onDeleteClick(todo){
    this.toDoItemDelete.emit(todo);
  }
}
