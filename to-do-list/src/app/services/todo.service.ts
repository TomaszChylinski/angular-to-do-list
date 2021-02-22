import { Injectable } from '@angular/core';
import { TodoItem } from '../models/toDo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/todos';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  constructor(private http: HttpClient) {}

  getTodDoItems(): Observable<TodoItem[]> {
    //get method returns an Observable not an arrary of todo items
    return this.http.get<TodoItem[]>(apiUrl); //expecation has to be set if you define the type
  }

  addToDoItems(todo: TodoItem): Observable<TodoItem> {
   return this.http.post<TodoItem>(apiUrl, todo);
  }

  removeToDoItem(productId){
    return this.http.delete(apiUrl + '/' + productId);
  }
}
