import { createAction } from 'redux-actions';
import { RouterModel } from "./RouterModel";

export namespace TodoActions {
  export const enum Type {
    ADD_TODO = 'ADD_TODO',
  }

  export const addTodo = createAction<PartialPick<RouterModel, 'text'>>(Type.ADD_TODO);
}

export type TodoActions = Omit<typeof TodoActions, 'Type'>;