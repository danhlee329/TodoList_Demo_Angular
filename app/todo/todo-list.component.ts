import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import * as console from 'console';
import { Component, OnInit, Input }   from '@angular/core';

import { TodoItem }            from './todoItem';
import { TodoService }         from './todo.service';
import { Logger }              from '../logger.service';

import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from './_constants';

@Component({
  moduleId: module.id,
  selector:    'todo-list',
  templateUrl: 'todo-list.component.html',
  providers:  [ TodoService ]
})
export class TodoListComponent implements OnInit {
  @Input() listName: string;

  newItem: string;
  items: TodoItem[];
  currentViewState: string;

  constructor(private service: TodoService, private logger: Logger) { 
    this.items = this.service.getTodoItems();
  }

  ngOnInit() {
    this.items = this.service.getTodoItems();
  }
  // getListName(){
  //   return this.currentListName;
  // }

  showItem(isComplete: boolean){
    switch(this.currentViewState){
      case COMPLETED_TODOS:
        return isComplete;
      case ACTIVE_TODOS:
        return !isComplete;
    }
    return true;
  }

  visibleItemCount(){
    let visibleItemCount = 0;

    this.items.forEach((item) =>{
      if(this.showItem(item.IsComplete)){
        visibleItemCount++;
      }
    })

    return visibleItemCount;
  }

  getCompletedItems(){
    let completedItemList = [];

    this.items.forEach((item) =>{
      if(item.IsComplete){
        completedItemList.push(item);
      }
    });

    return completedItemList;
  }

  addTodoItemToList(){
    if(this.service.isItemInList(this.newItem)){
      this.logger.log("Item '" + this.newItem + "' is already in the list");      
    } else {
      this.logger.log("Add new item: " + this.newItem);

      this.service.addTodoItem(this.newItem);
      this.items = this.service.getTodoItems();

      this.newItem = "";
    }
  }
  
  viewAll(){
    //TODO: For logging only!
    this.items.forEach((item) => {
      this.logger.log("viewAll: item ID - " + item.getID().toString());
    });
    this.currentViewState = ALL_TODOS;
  }

  viewCompleted(){
    //TODO: For logging only!
    this.items.forEach((item) => {
      if(item.IsComplete){
        this.logger.log("viewCompleted: item ID - " + item.getID().toString());
      }
    });
    this.currentViewState = COMPLETED_TODOS;    
  }

  viewActive(){
    //TODO: For logging only!
    this.items.forEach((item) => {
      if(!item.IsComplete){
        this.logger.log("viewActive: item ID - " + item.getID().toString());
      }
    });
    this.currentViewState = ACTIVE_TODOS;    
  }  

  clearCompleted(){
    let completedList = this.getCompletedItems();

    if(completedList.length > 0) {
      this.service.removeTodoItems(completedList);

      this.items = this.service.getTodoItems();
    }
  }    
}