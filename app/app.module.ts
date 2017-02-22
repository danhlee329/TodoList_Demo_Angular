import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { NgModule }            from '@angular/core';
import { AppComponent }        from './app.component';
import { TodoModule }        from './todo/todo.module';
//import { BackendService }      from './backend.service';
import { Logger }              from './shared/service/logger.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TodoModule
  ],
  declarations: [
    AppComponent
  ],
   providers: [
    Logger
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }