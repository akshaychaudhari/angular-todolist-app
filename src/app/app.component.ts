import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List App';
  username: string = 'Akshay';

  constructor() {
    console.log("This is constructor in app.component");
  }

}
