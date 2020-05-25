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
    this.ts.getTodos().subscribe(todos => { this.todos = todos; });  
  }

  deleteTodo(todo1: Todo){
    //console.log("Delete todo method");
    //Remove from UI
    this.todos = this.todos.filter(t => t.id !== todo1.id);
    
    //Remove from Server
    this.ts.deleteTodo(todo1).subscribe();

  }
 
  addTodo(todo2: Todo){
  
    this.ts.addTodo(todo2).subscribe(todo2 => {
      this.todos.push(todo2);
    });
  }
}
