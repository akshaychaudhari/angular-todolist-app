import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() todo: Todo[]
  
  todos:Todo[];

  constructor() { }

  ngOnInit(){
    this.todos = [
      {
        id:1,
        title: 'One' ,
        completed: false
      },
      {
        id:2,
        title: 'Two' ,
        completed: true
      },
      {
        id:3,
        title: 'Three' ,
        completed: false
      }
  ]
  }

  addItem(){
    console.log("Adding New Item for");
    var newItemValue = ((document.getElementById("newItem") as HTMLInputElement).value);
    this.todos.push({id:4, title:newItemValue,completed: false});

  }

  deleteItem(){
    this.todos.pop();
    console.log("Deleting last Item");

  }


}
