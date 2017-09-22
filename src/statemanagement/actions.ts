import {Action} from "@ngrx/store";
import {Todo} from "../app/model/Todo";

export const ActionTypes = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  REMOVE_COMPLETED_TODOS: "REMOVE_COMPLETED_TODOS"
};

export class AddTodoAction implements Action {
  type = ActionTypes.ADD_TODO;

  constructor(readonly payload: Todo) {
  }
}

export class ToggleTodoAction implements Action {
  type = ActionTypes.TOGGLE_TODO;

  constructor(readonly payload: Todo) {
  }
}

export class RemoveCompletedTodosAction implements Action {
  type = ActionTypes.REMOVE_COMPLETED_TODOS;
}
