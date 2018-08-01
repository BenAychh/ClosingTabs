import { createSelector } from '@ngrx/store';
import { IDiagram } from '../../models/diagram.model';
import * as fromFeature from '../reducers';
import * as fromDiagrams from '../reducers/diagrams.reducer';

export const getDiagramsState = createSelector(
  fromFeature.getFeatureState,
  (state: fromFeature.FeatureState) => state.diagrams,
);

export const getDiagrams = createSelector(getDiagramsState, fromDiagrams.getDiagrams);
export const getDiagramsAnyNetworkActive = createSelector(getDiagramsState, fromDiagrams.getAnyDiagramsNetworkActive);

export const getSelectedDiagram = (id) =>
  createSelector(getDiagramsState, (diagramState): IDiagram => diagramState.entities[id]);

export const getSelectedDiagramNetworkActive = (id) =>
  createSelector(getDiagramsState, (diagramState): boolean => diagramState.networkActive[id]);
