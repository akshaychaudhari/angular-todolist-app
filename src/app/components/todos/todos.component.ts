import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() todos: Todo[]
  
  constructor(private ts:TodoService) { }

  ngOnInit(){
    this.ts.getTodos().subscribe(todos => {
      this.todos = todos;
    });  
  }

  addItem(){
    
    console.log("Adding New Item for");
    var newItemValue = ((document.getElementById("newItem") as HTMLInputElement).value);
    this.todos.push({id:4, title:newItemValue,completed: false});

  }
}
