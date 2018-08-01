import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DmsMaterialModule } from '../material';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromServices from './services';
import { effects, reducers } from './store';

export const ROUTES: Routes = [
  {
    component: fromContainers.FeatureComponent,
    path: '',
  },
];

@NgModule({
  declarations: [...fromComponents.components, ...fromContainers.containers],
  exports: [...fromComponents.components, ...fromContainers.containers],
  imports: [
    StoreModule.forFeature('Feature', reducers),
    EffectsModule.forFeature(effects),
    CommonModule,
    DmsMaterialModule,
    RouterModule.forChild(ROUTES),
  ],
  providers: [...fromServices.services],
})
export class FeatureModule {}
