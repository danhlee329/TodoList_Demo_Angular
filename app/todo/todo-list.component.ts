import { Component, OnInit }   from '@angular/core';

import { TodoItem }            from './todoItem';
import { TodoService }         from './todo.service';
import { Logger } from '../logger.service';

@Component({
  moduleId: module.id,
  selector:    'todo-list',
  templateUrl: 'todo-list.component.html',
  providers:  [ TodoService ]
})
export class TodoListComponent implements OnInit {
//export class TodoListComponent {
  newItem: string;
  items: TodoItem[];

  constructor(private service: TodoService, private logger: Logger) { 
    this.items = this.service.getTodoItems();
  }

  ngOnInit() {
    this.items = this.service.getTodoItems();
  }

  addTodoItemToList(){
    this.logger.log("Add new item: " + this.newItem);

    this.service.addTodoItem(this.newItem);
    this.items = this.service.getTodoItems();

    this.newItem = "";
  }
  
  viewAll(){
    this.items.forEach((item) => {
      this.logger.log("viewAll: item ID - " + item.getID().toString());
    });
  }

  viewCompleted(){
    this.items.forEach((item) => {
      if(item.IsComplete){
        this.logger.log("viewCompleted: item ID - " + item.getID().toString());
      }
    });
  }

  viewActive(){
    this.items.forEach((item) => {
      if(!item.IsComplete){
        this.logger.log("viewActive: item ID - " + item.getID().toString());
      }
    });
  }  

  clearCompleted(){
    this.items.forEach((item) => {
      if(item.IsComplete){
        this.logger.log("clearCompleted: item ID - " + item.getID().toString());
      }
    });
  }    
}