import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo'
import { TodoService } from '../../services/todo.service'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo
  @Output() deleteTodo:EventEmitter<Todo> = new EventEmitter()

  constructor(
    private todoService:TodoService,
    private http:HttpClient
  ) { }

  ngOnInit() {
  }

  //set dynamic classes
  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes
  }

  onToggle(todo){
    //console.log('Toggle clicked')
    //this.todo.completed = !this.todo.completed
    this.todoService.toggleCompleted(todo).subscribe( t => {
      console.log(t)
      this.todo.completed = !t.completed
    })
  }

  

  onDelete(todo){
    console.log(`Deleted event emitted`)
    this.deleteTodo.emit(todo)
  }

}
