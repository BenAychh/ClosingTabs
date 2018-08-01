import { Action } from '@ngrx/store';

export type ActionHandler<T, U extends Action> = (state: T, action: U) => T;
