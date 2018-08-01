import { Routes } from '@angular/router';
import { FeatureModule } from './feature/feature.module';

export const fakeLazyLoad = () => FeatureModule;

export const ROUTES: Routes = [
  {
    loadChildren: fakeLazyLoad,
    path: 'feature',
  },
  { path: '', pathMatch: 'full', redirectTo: 'feature' },
];
