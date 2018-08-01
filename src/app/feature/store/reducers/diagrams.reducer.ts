import { IActionMap } from "../../../dfm-common/models/actionMap.model";
import { IEntity } from "../../../dfm-common/models/entity.model";
import { IDiagram } from "../../models/diagram.model";
import * as fromActions from "../actions/diagram.actions";

export interface IDiagramsState {
  entities: IEntity<IDiagram>;
  networkActive: { [key: string]: boolean };
}

const initialState: IDiagramsState = {
  entities: {},
  networkActive: {}
};

const actionMap: IActionMap<IDiagramsState, fromActions.DiagramActions> = {
  [fromActions.LOAD_DIAGRAM]: loadDiagramHandler,
  [fromActions.DIAGRAM_FAILURE]: diagramFailureHandler,
  [fromActions.LOAD_DIAGRAM_SUCCESS]: loadDiagramSuccessHandler,
  [fromActions.FINISHED_NETWORK_REQUEST_FOR_DIAGRAM]: finishedNetworkRequestForDiagramHandler
};

export function reducer(
  state: IDiagramsState = initialState,
  action: fromActions.DiagramActions
): IDiagramsState {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }
  return state;
}

function loadDiagramHandler(
  state: IDiagramsState,
  action: fromActions.LoadDiagram
): IDiagramsState {
  return {
    ...state,
    networkActive: {
      ...state.networkActive,
      [action.payload]: true
    }
  };
}

function diagramFailureHandler(
  state: IDiagramsState,
  action: fromActions.DiagramFailure
): IDiagramsState {
  console.log(state, action);
  return {
    ...state,
    networkActive: {
      ...state.networkActive,
      [action.payload.diagramId]: false
    }
  };
}

function loadDiagramSuccessHandler(
  state: IDiagramsState,
  action: fromActions.LoadDiagramSuccess
): IDiagramsState {
  return {
    ...state,
    entities: {
      ...state.entities,
      [action.payload.id]: action.payload
    },
    networkActive: {
      ...state.networkActive,
      [action.payload.id]: false
    }
  };
}

function finishedNetworkRequestForDiagramHandler(
  state: IDiagramsState,
  action: fromActions.FinishedNetworkRequestForDiagram
): IDiagramsState {
  return {
    ...state,
    networkActive: {
      ...state.networkActive,
      [action.payload.id]: false
    }
  };
}

export const getAnyDiagramsNetworkActive = (state: IDiagramsState) => {
  return Object.keys(state.networkActive)
    .map(key => state.networkActive[key])
    .some(active => active);
};
export const getDiagramsNetworkActive = (state: IDiagramsState) =>
  state.networkActive;
export const getDiagrams = (state: IDiagramsState) => state.entities;
