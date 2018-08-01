import { Action } from '@ngrx/store';
import { ITab } from '../../models/tab.model';

export const ADD_TAB = '[DMS] Add Tab';
export const REMOVE_TAB = '[DMS] Remove Tab';
export const SET_TAB_INDEX = '[DMS] Set Tab Index';

export class AddTab implements Action {
  readonly type = ADD_TAB;
  constructor(public payload: ITab) {}
}

export class RemoveTab implements Action {
  readonly type = REMOVE_TAB;
  constructor(public payload: string) {}
}

export class SetTabIndex implements Action {
  readonly type = SET_TAB_INDEX;
  constructor(public payload: number) {}
}

export type TabActions = AddTab | RemoveTab | SetTabIndex;
