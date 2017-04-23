import {ChangeDetectionStrategy, Component} from "@angular/core";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  providers: [TodoService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Todos</h1>
  `
})
export class AppComponent {

  public todos$;

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.todos$;
  }

}
