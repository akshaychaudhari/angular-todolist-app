import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  
  constructor(private ts:TodoService) { }
  
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
    this.ts.toggleCompleted(todo).subscribe(  todo => {  });
    //console.log();
    console.log("Toggle done for object:"); console.log(todo);
  }
  
  /* Delete Action for the Todo item*/
  onDelete(todo){
    this.deleteTodo.emit(todo);

    console.log('Delete Done');
  }
}
