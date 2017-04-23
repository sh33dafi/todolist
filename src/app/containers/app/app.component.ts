import {ChangeDetectionStrategy, Component} from "@angular/core";
import {Todo} from "../../model/Todo";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  providers: [TodoService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Todos</h1>
    <new-todo-item (onAddTodo)="addTodo($event)"></new-todo-item>
    <button (click)="removeAllCompleted()">Remove all completed</button>
    <todo-list [todos]="todos$ | async"
               (onToggleComplete)="toggleComplete($event)"></todo-list>
  `
})
export class AppComponent {

  public todos$;

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.todos$;
  }

  public addTodo(todo: Todo) {
    this.todoService.addTodo(todo);
  }

  public toggleComplete(todo) {
    this.todoService.toggleComplete(todo);
  }

  public removeAllCompleted() {
    this.todoService.removeCompleted();
  }

}
