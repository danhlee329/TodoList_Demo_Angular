import { Injectable } from '@angular/core';

import { TodoItem } from './todoItem';
//import { BackendService } from './backend.service';
import { Logger } from '../logger.service';

@Injectable()
export class TodoService {
  private _list: TodoItem[] = [];

  constructor(
    //private backend: BackendService,
    private logger: Logger) { }

  addTodoItem(item: TodoItem){
      //TODO: Check if item is already in list
      //TODO: add to backend
      this._list.push(item);
  }

  getTodoItems() {
    // this.backend.getAll(Hero).then( (heroes: Hero[]) => {
    //   this.logger.log(`Fetched ${heroes.length} heroes.`);
    //   this.heroes.push(...heroes); // fill cache
    // });
    return this._list;
  }
}