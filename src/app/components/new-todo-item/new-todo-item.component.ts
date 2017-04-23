import {Component, EventEmitter, Output} from "@angular/core";
import {Todo} from "../../model/Todo";
import {FormControl} from "@angular/forms";

@Component({
  selector: "new-todo-item",
  template: `<input placeholder="What do you want to get done?"  
                    [formControl] ="newTodoInput" 
                    (keyup.enter)="addTodo()" />`
})
export class NewTodoItemComponent {

  @Output() onAddTodo: EventEmitter<Todo>;

  public newTodoInput = new FormControl("");

  constructor() {
    this.onAddTodo = new EventEmitter();
  }

  public addTodo(): void {
    const todo = new Todo(this.newTodoInput.value);
    this.newTodoInput.setValue("");
    this.onAddTodo.emit(todo);
  }
}
