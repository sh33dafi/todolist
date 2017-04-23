import {Action} from "@ngrx/store";
import {Todo} from "../app/model/Todo";
import {ActionTypes} from "./actions";

const INITIAL_STATE: Todo[] = [];

export function todoReducer(state: Todo[] = INITIAL_STATE, action: Action): Todo[] {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [...state, action.payload];
    case ActionTypes.REMOVE_COMPLETED_TODOS:
      return state.filter(todo => !todo.isCompleted());
    case ActionTypes.TOGGLE_TODO:
      return state.map(todo => {
        if (todo === action.payload) {
          todo.toggleComplete();
        }
        return todo;
      });
    default:
      return state;
  }
}
