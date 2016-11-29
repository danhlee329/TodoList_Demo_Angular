import { Component, OnInit }   from '@angular/core';

import { TodoItem }                from './todoItem';
import { TodoService }         from './todo.service';

@Component({
  moduleId: module.id,
  selector:    'todo-list',
  //templateUrl: 'hero-list.component.html',
  providers:  [ TodoService ]
})
export class TodoListComponent implements OnInit {
  items: TodoItem[];
  //selectedHero: Hero;

  constructor(private service: TodoService) { }

  ngOnInit() {
    this.items = this.service.getTodoItems();
  }

  //selectHero(hero: Hero) { this.selectedHero = hero; }
}