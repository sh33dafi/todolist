import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Todo} from "../../model/Todo";

@Component({
  moduleId: module.id,
  selector: "todo-item",
  template: `<input type="checkbox" 
                    [checked]="todo.isCompleted()" 
                    (click)="toggleComplete(todo)">{{todo.description}}`
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() onToggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  public toggleComplete(todo) {
    this.onToggleComplete.emit(todo);
  }
}
