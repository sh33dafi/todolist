import {Injectable} from "@angular/core";
import {Todo} from "../model/Todo";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class TodoService {

  public todos$: BehaviorSubject<Todo[]>;
  private todos: Todo[];

  constructor() {
    this.todos = [];
    this.todos$ = new BehaviorSubject(this.todos);
  }

  public addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.todos$.next(this.todos);
  }

  public toggleComplete(todo: Todo) {
    todo.toggleComplete();
  }

  public removeCompleted() {
    this.todos$.next(
      this.todos.filter(todo => !todo.isCompleted())
    );
  }
}
