import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo'
import { TodoService } from '../../services/todo.service'


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[]

  constructor(
    private todoService: TodoService,
    ) { }

  ngOnInit() {
   this.todoService.getTodos().subscribe( t => {
     this.todos = t
   })
  }

  deleteTodo(todo:Todo){
    //return this.todoService.deleteTodos()
    this.todos = this.todos.filter((t)=>{
      return t.id !== todo.id
    })
    this.todoService.deleteTodo(todo).subscribe()
  }

  addTodo(todo: Todo){
    //this.todos.push(todo)
    this.todoService.addTodo(todo).subscribe((t)=>{
      this.todos.push(t)
    })
  }

}
