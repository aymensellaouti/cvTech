import { Injectable } from '@angular/core';
import {Todo} from "./Model/Todo";

@Injectable()
export class TodoService {

  private mesTodos: Todo[];
  constructor() {
    this.mesTodos = [
      {title : 'lundi',description : 'Travailler'},
      {title : 'mardi',description : 'Sport'}
    ]
  }
  getTodos(){
    return this.mesTodos;
  }

  addTodo(title, description){
    this.mesTodos.push(new Todo(title,description));
  }

  logerTodo(todo : Todo){
    console.log(todo);
  }

  deleteTodo(todo : Todo){
    var index = this.mesTodos.indexOf(todo);
    if (index > -1) {
      this.mesTodos.splice(index, 1);
    }
  }

  logoTodos(){
    console.log(this.mesTodos);
  }
}
