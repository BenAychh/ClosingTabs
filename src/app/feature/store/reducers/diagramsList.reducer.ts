import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IActionMap } from '../../../dfm-common/models/actionMap.model';
import { IDiagram } from '../../models/diagram.model';
import * as fromActions from '../actions/diagramsList.actions';

export interface IDiagramListState extends EntityState<IDiagram> {
  networkActive: boolean;
}

export const diagramsAdapter: EntityAdapter<IDiagram> = createEntityAdapter<
  IDiagram
>();

const initialState: IDiagramListState = Object.assign(
  diagramsAdapter.getInitialState(),
  {
    networkActive: false
  }
);

const actionMap: IActionMap<
  IDiagramListState,
  fromActions.DiagramsListActions
> = {
  [fromActions.LOAD_DIAGRAMS_LIST]: loadDiagramsListHandler,
  [fromActions.LOAD_DIAGRAMS_LIST_FAIL]: loadDiagramsListFailHandler,
  [fromActions.LOAD_DIAGRAMS_LIST_SUCCESS]: loadDiagramsListSuccessHandler
};

export function reducer(
  state: IDiagramListState = initialState,
  action: fromActions.DiagramsListActions
): IDiagramListState {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }
  return state;
}

function loadDiagramsListHandler(
  state: IDiagramListState,
  action: fromActions.LoadDiagramsList
): IDiagramListState {
  return {
    ...state,
    networkActive: true
  };
}

function loadDiagramsListFailHandler(
  state: IDiagramListState,
  action: fromActions.LoadDiagramsListFail
): IDiagramListState {
  return Object.assign(diagramsAdapter.removeAll(state), {
    loaded: false,
    networkActive: false
  });
}

function loadDiagramsListSuccessHandler(
  state: IDiagramListState,
  action: fromActions.LoadDiagramsListSuccess
): IDiagramListState {
  return Object.assign(
    diagramsAdapter.removeAll(state),
    diagramsAdapter.addAll(action.payload, state),
    {
      loaded: true,
      networkActive: false
    }
  );
}

export const getDiagramsListNetworkActive = (state: IDiagramListState) =>
  state.networkActive;
export const getDiagramsList = (state: IDiagramListState) =>
  (state.ids as string[]).map(id => state.entities[id]);

export const { selectEntities } = diagramsAdapter.getSelectors();
