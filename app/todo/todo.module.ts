import { TodoService } from './todo.service';
import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
//import { TodoService }         from './todo.service';
import { TodoListComponent }   from './todo-list-component/todo-list.component';


@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [ TodoListComponent ],
  providers:    [ TodoService ],
  exports:      [ TodoListComponent, CommonModule, FormsModule ]
})
export class TodoModule { }
