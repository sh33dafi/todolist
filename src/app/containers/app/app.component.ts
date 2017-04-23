import {ChangeDetectionStrategy, Component} from "@angular/core";
import {Todo} from "../../model/Todo";
import {Store} from "@ngrx/store";
import {AppState} from "../../../statemanagement/state";
import {AddTodoAction, RemoveCompletedTodosAction, ToggleTodoAction} from "../../../statemanagement/actions";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ngrx-store-log-monitor toggleCommand="ctrl-h" positionCommand="ctrl-m"></ngrx-store-log-monitor>
    <h1>Todos</h1>
    <new-todo-item (onAddTodo)="addTodo($event)"></new-todo-item>
    <button (click)="removeAllCompleted()">Remove all completed</button>
    <todo-list [todos]="todos$ | async"
               (onToggleComplete)="toggleComplete($event)"></todo-list>
  `
})
export class AppComponent {

  public todos$;

  constructor(private store: Store<AppState>) {
    this.todos$ = this.store.select("todos");
  }

  public addTodo(todo: Todo) {
    this.store.dispatch(new AddTodoAction(todo));
  }

  public toggleComplete(todo) {
    this.store.dispatch(new ToggleTodoAction(todo));
  }

  public removeAllCompleted() {
    this.store.dispatch(new RemoveCompletedTodosAction());
  }

}
