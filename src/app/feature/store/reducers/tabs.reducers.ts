import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IActionMap } from '../../../dfm-common/models/actionMap.model';
import { ITab } from '../../models/tab.model';
import * as fromActions from '../actions/tabs.actions';

export interface ITabState extends EntityState<ITab> {
  currentTabIndex: number;
}

export const tabAdapter: EntityAdapter<ITab> = createEntityAdapter<ITab>();

export const initialTabState: ITabState = Object.assign(
  tabAdapter.getInitialState(),
  {
    currentTabIndex: -1
  }
);

const actionMap: IActionMap<ITabState, fromActions.TabActions> = {
  [fromActions.ADD_TAB]: addTabHandler,
  [fromActions.REMOVE_TAB]: removeTabHandler,
  [fromActions.SET_TAB_INDEX]: setTabIndexHandler
};

export function reducer(
  state: ITabState = initialTabState,
  action: fromActions.TabActions
): ITabState {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }
  return state;
}

function addTabHandler(
  state: ITabState,
  action: fromActions.AddTab
): ITabState {
  if (!state.entities[action.payload.id]) {
    const updatedCurrentTabIndexState = {
      ...state,
      currentTabIndex: state.ids.length + 1
    };
    return tabAdapter.addOne(action.payload, updatedCurrentTabIndexState);
  }
  return {
    ...state,
    currentTabIndex: (state.ids as string[]).findIndex(
      id => id === action.payload.id
    )
  };
}

function removeTabHandler(
  state: ITabState,
  action: fromActions.RemoveTab
): ITabState {
  return tabAdapter.removeOne(action.payload, state);
}

function setTabIndexHandler(
  state: ITabState,
  action: fromActions.SetTabIndex
): ITabState {
  return {
    ...state,
    currentTabIndex: action.payload
  };
}

export const { selectAll } = tabAdapter.getSelectors();
export const selectCurrentIndex = (state: ITabState) => state.currentTabIndex;
export const selectCurrentEntity = (state: ITabState) =>
  state.entities[state.ids[state.currentTabIndex]];
