import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector, createSelector, ActionReducer, ActionReducerMap } from '@ngrx/store';

export interface IRouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface IState {
  routerReducer: fromRouter.RouterReducerState<IRouterStateUrl>;
}

export const reducers: ActionReducerMap<IState> = {
  routerReducer: fromRouter.routerReducer,
};

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<IRouterStateUrl>>('routerReducer');

export class CustomSerializer implements fromRouter.RouterStateSerializer<IRouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): IRouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }

    const params = state.params;

    return {
      params,
      queryParams,
      url,
    };
  }
}
