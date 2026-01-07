import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo-model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/api/todos'

  constructor(private httpClient: HttpClient) {}

  allTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiUrl)
  }

  addTodo(text: string): Observable<Todo> {
    return this.httpClient.post<Todo>(this.apiUrl, { text })
  }
}
