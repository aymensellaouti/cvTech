import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-lampe',
  templateUrl: './lampe.component.html',
  styleUrls: ['./lampe.component.css'],
  providers: []
})
export class LampeComponent implements OnInit, OnChanges {

  myClass: object;
  allumee: boolean;
  eteinte: boolean;
  couleur: string;
  @Input() color = '';
  constructor(private todoService: TodoService) {
    this.allumee = true;
    this.eteinte = false;
    this.myClass = {
      white: this.allumee,
      black: this.eteinte,
    };
    console.log('color in lampe');
    console.log(this.color);
    this.couleur = this.color;
  }

  ngOnInit() {
    console.log('in ngOnInit');
  }

  bouton() {
      // this.todoService.logoTodos();
    (this.color === 'red') ? this.color = 'yellow' : this.color = 'red';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('in OnChanges');
    console.log(changes);
  }
}
