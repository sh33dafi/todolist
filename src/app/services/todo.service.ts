import {Injectable} from "@angular/core";
import {Todo} from "../model/Todo";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TodoService {

  public todos$: BehaviorSubject<Todo[]>;

  constructor() {
    this.todos$ = new BehaviorSubject([]);
  }

  public addTodo(todo: Todo): void {
    this.todos$.next([...this.todos$.getValue(), todo]);
  }

  public toggleComplete(todo: Todo) {
    todo.toggleComplete();
  }

  public removeCompleted() {
    this.todos$.next(this.todos$.getValue().filter(todo => !todo.isCompleted()));
  }
}
