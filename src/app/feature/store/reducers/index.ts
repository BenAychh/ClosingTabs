import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromDiagrams from './diagrams.reducer';
import * as fromDiagramsList from './diagramsList.reducer';
import * as fromTabs from './tabs.reducers';

export interface FeatureState {
  diagramsList: fromDiagramsList.IDiagramListState;
  diagrams: fromDiagrams.IDiagramsState;
  tabs: fromTabs.ITabState;
}

export const reducers: ActionReducerMap<FeatureState> = {
  diagrams: fromDiagrams.reducer,
  diagramsList: fromDiagramsList.reducer,
  tabs: fromTabs.reducer,
};

export const getFeatureState = createFeatureSelector<FeatureState>('Feature');
