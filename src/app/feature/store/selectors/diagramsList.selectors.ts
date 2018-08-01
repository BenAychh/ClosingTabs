import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromDiagramsList from '../reducers/diagramsList.reducer';

export const getDiagramsListState = createSelector(
  fromFeature.getFeatureState,
  (state: fromFeature.FeatureState) => state.diagramsList,
);

export const getDiagramsList = createSelector(getDiagramsListState, fromDiagramsList.getDiagramsList);
export const getDiagramsListNetworkActive = createSelector(
  getDiagramsListState,
  fromDiagramsList.getDiagramsListNetworkActive,
);
export const getDiagramsEntities = createSelector(getDiagramsListState, fromDiagramsList.selectEntities);
