import { TokenizeOptions } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { TodoItem } from '../models/toDo';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
 
  toDoItems: TodoItem[] = [
    new TodoItem(1, 'Buy Daisey Food', false),
    new TodoItem(2, 'Take out chicken', false),
    new TodoItem(3, 'Complete homework', false),
    new TodoItem(4, 'Get a haircut', false),
    new TodoItem(5, 'Study more', false),
    new TodoItem(6, 'Create a business', true),
  ];

  constructor() {}

  getProducts(): TodoItem[]{
    return this.toDoItems;
  }
}
