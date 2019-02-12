import { routerReducer } from "./router/routerReducer";
import { combineReducers } from "redux";

import { RouterModel } from "./router/RouterModel";
export interface RootState {
  router: RootState.RouterState;
}

export namespace RootState {
  export type RouterState = RouterModel;
}

export const rootReducer = combineReducers<RootState>({
  router: routerReducer as any,
});