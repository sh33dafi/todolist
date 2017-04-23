import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./containers/app/app.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {TodoItemComponent} from "./components/todo-item/todo-item.component";
import {NewTodoItemComponent} from "./components/new-todo-item/new-todo-item.component";
import {StoreModule} from "@ngrx/store";
import {todoReducer} from "statemanagement/reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreLogMonitorModule, useLogMonitor} from "@ngrx/store-log-monitor";

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({ visible: false, position: "right" })
  };
}

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    NewTodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore({ todos: todoReducer }),
    StoreDevtoolsModule.instrumentStore(instrumentOptions),
    StoreLogMonitorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
