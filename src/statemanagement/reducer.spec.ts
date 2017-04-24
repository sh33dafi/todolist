import {todoReducer} from "./reducer";
import {Todo} from "../app/model/Todo";
import {Action} from "@ngrx/store";
import {AddTodoAction, RemoveCompletedTodosAction, ToggleTodoAction} from './actions';
const deepFreeze = require("deep-freeze");

describe("Reducer", function () {
  describe("When no action matches", function () {
    it("Should return the initial state", function () {
      const initialState: Todo[] = [];
      const action: Action = {type: "UnEXISTING"};

      deepFreeze(initialState);
      const newState = todoReducer(initialState, action);

      expect(newState).toBe(initialState);
    });
  });

  describe("When an ADD TODO action is dispatched", function () {
    it("Should add the todo", function () {
      const initialState: Todo[] = [];
      const newTodo = new Todo("Test");
      const action: Action = new AddTodoAction(newTodo);

      deepFreeze(initialState);
      const newState = todoReducer(initialState, action);

      expect(newState.length).toEqual(1);
      expect(newState[0]).toEqual(newTodo);
    });
  });

  describe("When an REMOVE COMPLETE TODOS action is dispatched", function () {
    it("Should remove the completed todos", function () {
      const completedTodo = new Todo("Complete");
      const unCompletedTodo = new Todo("UnComplete");
      completedTodo.toggleComplete();
      const initialState: Todo[] = [completedTodo, unCompletedTodo];
      const action: Action = new RemoveCompletedTodosAction();

      deepFreeze(initialState);
      const newState = todoReducer(initialState, action);

      expect(newState.length).toEqual(1);
      expect(newState[0]).toEqual(unCompletedTodo);
    });
  });
});
