import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `    
    <div>
        <h1>Angular Todo - Condo Work</h1>
        <todo-list listName="Bathroom (Upstairs)"></todo-list>
        <todo-list listName="Bathroom (Mezzanine)"></todo-list>
        <todo-list listName="Kitchen"></todo-list>
        <todo-list listName="Living Room"></todo-list>
        <todo-list listName="Misc"></todo-list>
    </div>
`
})
export class AppComponent {
    

}