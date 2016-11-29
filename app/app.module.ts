import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { NgModule }            from '@angular/core';
import { AppComponent }        from './app.component';
import { TodoListComponent } from './todo/todo-list.component';
import { TodoService }      from './todo/todo.service';
//import { BackendService }      from './backend.service';
import { Logger }              from './logger.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TodoListComponent
  ],
   providers: [
    //BackendService,
    TodoService,
    Logger
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }