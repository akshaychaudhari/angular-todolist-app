import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  setClass() {
    let classes = {
      todo: true,
      'isComplete': this.todo.completed
    }
    return classes;
  }

  /* Toggle Action for the Todo item*/
  onToggle(todo) {
    //Toggle in UI
    todo.completed = ! todo.completed;
    
    //Toggle on Server
    this.todoService.toggleCompleted(todo).subscribe(todo => 
      console.log("Heyy"+todo))
    console.log("Toggle done");
  }
  
  /* Delete Action for the Todo item*/
  onDelete(todo){

    console.log('Delete Done');
  }
}
