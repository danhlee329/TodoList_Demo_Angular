import { Injectable } from '@angular/core';

import { TodoItem } from './todo-list-component/todoItem';
//import { BackendService } from './shared/service/backend.service';
import { Logger } from '../shared/service/logger.service';

@Injectable()
export class TodoService {
  private _list: TodoItem[] = [];

  constructor(
    //private backend: BackendService,
    private logger: Logger) { }

  addTodoItem(name: string){
    let isInList = this.isItemInList(name);

    this.logger.log(isInList);

    if(!isInList){
      this._list.push(new TodoItem(name));
    }
  }

  removeTodoItems(items: TodoItem[]){
    let completedList = items;
    let completedItemIndex = 0;
    let newList = [];
    let curID = 0;

    this._list.forEach((item) => {
      if(completedItemIndex > completedList.length - 1){
        newList.push(item);
      } else {
        let curID = completedList[completedItemIndex].getID();

        if(item.getID() === curID){
          completedItemIndex++;
        } else {
          newList.push(item);
        }
      }
    });

    this._list = newList;
  }

  isItemInList(name: string): boolean {
    let isInList = false;

    this._list.forEach((item) => {
      if(item.Name.trim().toUpperCase() === name.trim().toUpperCase()){
        isInList = true;
        return;
      }
    });

    return isInList;
  }

  getTodoItems() {
    // this.backend.getAll(Hero).then( (heroes: Hero[]) => {
    //   this.logger.log(`Fetched ${heroes.length} heroes.`);
    //   this.heroes.push(...heroes); // fill cache
    // });
    return this._list;
  }
}