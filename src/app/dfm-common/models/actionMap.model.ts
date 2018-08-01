import { Action } from '@ngrx/store';
import { ActionHandler } from '../../types';

export interface IActionMap<T, U extends Action> {
  [key: string]: ActionHandler<T, U>;
}
