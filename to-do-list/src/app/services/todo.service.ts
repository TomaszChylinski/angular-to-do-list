import { Injectable } from '@angular/core';
import { Todo } from '../models/ToDo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { toDosUrl } from '../config/api';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'applicaiton.json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  toDosUrl: any;
  constructor(private http: HttpClient) {}

  // Get To Dos
  getToDos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(toDosUrl);
  }

  // Toggle Completed --- a "put" request updates server
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${toDosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  // Delete Todo
  deleteToDo(todo: Todo): Observable<Todo> {
    const url = `${toDosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }
}
