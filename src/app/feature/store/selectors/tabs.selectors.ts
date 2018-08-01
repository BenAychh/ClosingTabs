import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromTabs from '../reducers/tabs.reducers';

export const getTabsState = createSelector(
  fromFeature.getFeatureState,
  (state: fromFeature.FeatureState) => state.tabs,
);

export const getAllTabs = createSelector(getTabsState, fromTabs.selectAll);
export const getCurrentTabIndex = createSelector(getTabsState, fromTabs.selectCurrentIndex);
export const getCurrentTabEntity = createSelector(getTabsState, fromTabs.selectCurrentEntity);
