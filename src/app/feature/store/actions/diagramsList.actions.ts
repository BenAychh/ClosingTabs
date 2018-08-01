import { Action } from '@ngrx/store';
import { IDiagram } from '../../models/diagram.model';

export const LOAD_DIAGRAMS_LIST = '[DMS] Load Diagrams List';
export const LOAD_DIAGRAMS_LIST_FAIL = '[DMS] Load Diagrams List Fail';
export const LOAD_DIAGRAMS_LIST_SUCCESS = '[DMS] Load Diagrams List Success';

export class LoadDiagramsList implements Action {
  readonly type = LOAD_DIAGRAMS_LIST;
}

export class LoadDiagramsListFail implements Action {
  readonly type = LOAD_DIAGRAMS_LIST_FAIL;
  constructor(public payload: any) {}
}

export class LoadDiagramsListSuccess implements Action {
  readonly type = LOAD_DIAGRAMS_LIST_SUCCESS;
  constructor(public payload: IDiagram[]) {}
}

export type DiagramsListActions = LoadDiagramsList | LoadDiagramsListFail | LoadDiagramsListSuccess;
