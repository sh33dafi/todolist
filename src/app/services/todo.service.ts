import {Injectable} from "@angular/core";
import {Todo} from "../model/Todo";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class TodoService {

  public todos: Todo[];

  constructor() {
    this.todos = [];
  }

  public addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  public toggleComplete(todo: Todo) {
    todo.toggleComplete();
  }

  public removeCompleted() {
    this.todos = this.todos.filter(todo => !todo.isCompleted());
  }
}
