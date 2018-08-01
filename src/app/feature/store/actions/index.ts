import { Action } from '@ngrx/store';

export * from './diagramsList.actions';
export * from './diagram.actions';
export * from './tabs.actions';

export class NoOpAction implements Action {
  readonly type = 'NO OP';
}
