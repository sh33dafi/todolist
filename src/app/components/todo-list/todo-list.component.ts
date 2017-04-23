import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Todo} from "../../model/Todo";

@Component({
  selector: "todo-list",
  template: `
    <ul class="todo-list">
      <li *ngFor="let todo of todos">
        <todo-item
          [todo]="todo"
          (onToggleComplete)="toggleComplete(todo)"
        ></todo-item>
      </li>
    </ul>`
})
export class TodoListComponent {

  @Input() todos: Todo[];
  @Output() onToggleComplete: EventEmitter<any> = new EventEmitter();

  public toggleComplete(todo) {
    this.onToggleComplete.emit(todo);
  }
}
