import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `    
    <div>
        <h1>Angular Todo - Condo Work</h1>
        <div class="TodoModule_Content">
            <todo-list class="TodoModule_list" listName="Bathroom (Upstairs)"></todo-list>
            <todo-list class="TodoModule_list" listName="Bathroom (Mezzanine)"></todo-list>
            <todo-list class="TodoModule_list" listName="Kitchen"></todo-list>
            <todo-list class="TodoModule_list" listName="Living Room"></todo-list>
            <todo-list class="TodoModule_list" listName="Misc"></todo-list>
        </div>
    </div>
`
})
export class AppComponent { }