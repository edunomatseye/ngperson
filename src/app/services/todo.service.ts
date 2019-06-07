import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosUrl:string = 'https://jsonplaceholder.typicode.com/todos'
  todosLimit:string = '?_limit=5'
  constructor(
    private http:HttpClient
  ) { }

  getTodos():Observable<Todo[]>{
    /* const todos = [
      {id: 1, title: "Todo 1", completed: false},
      {id: 2, title: "Todo 22", completed: true},
      {id: 3, title: "Todo 33", completed: false},
    ]
    return todos */
    return this.http.get<Todo[]>(this.todosUrl+this.todosLimit)
  }

  toggleCompleted(todo:Todo): Observable<any>{
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions)
  }

  deleteTodo(todo:Todo):Observable<Todo>{
    console.log('delete me')
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.delete<Todo>(url, httpOptions)
  }

  addTodo(todo: Todo):Observable<Todo>{
    console.log('Todo added success')
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions) 
  }

}
