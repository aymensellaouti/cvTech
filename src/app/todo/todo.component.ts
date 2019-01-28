import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";
import {Todo} from "../Model/Todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  titre : string;
  description : string;
  add:boolean;
  todos : Todo[];
  constructor(private todoService : TodoService) { }

  ngOnInit() {
    this.add=false;
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(todo : Todo){
    this.todoService.deleteTodo(todo);
  }
  addVisible(){
    this.add = true;
  }

  addTodo(){
    this.todoService.addTodo(this.titre,this.description);
  }

}
