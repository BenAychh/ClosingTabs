import { Action } from '@ngrx/store';
import { IDiagram } from '../../models/diagram.model';

export const LOAD_DIAGRAM = '[DMS] Load Diagram';
export const DIAGRAM_FAILURE = '[DMS] Diagram Fail';
export const LOAD_DIAGRAM_SUCCESS = '[DMS] Load Diagram Success';
export const FINISHED_NETWORK_REQUEST_FOR_DIAGRAM =
  '[DMS] Finished Network Access for Diagram';

export class LoadDiagram implements Action {
  readonly type = LOAD_DIAGRAM;
  constructor(public payload: string) {}
}

export class DiagramFailure implements Action {
  readonly type = DIAGRAM_FAILURE;
  constructor(public payload: { error: any; diagramId: string }) {}
}

export class LoadDiagramSuccess implements Action {
  readonly type = LOAD_DIAGRAM_SUCCESS;
  constructor(public payload: IDiagram) {}
}

export class FinishedNetworkRequestForDiagram implements Action {
  readonly type = FINISHED_NETWORK_REQUEST_FOR_DIAGRAM;
  constructor(public payload: IDiagram) {}
}

export type DiagramActions =
  | LoadDiagram
  | DiagramFailure
  | LoadDiagramSuccess
  | FinishedNetworkRequestForDiagram;
