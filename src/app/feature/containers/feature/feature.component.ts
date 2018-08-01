import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import * as fromStore from '../../store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-feature',
  styleUrls: ['./feature.component.scss'],
  templateUrl: './feature.component.html',
})
export class FeatureComponent implements OnInit {
  diagramsLoading$: Observable<boolean>;
  isAnythingBeingDragged: boolean;

  constructor(private store: Store<fromStore.FeatureState>) {}

  ngOnInit() {
    this.diagramsLoading$ = combineLatest(
      this.store.select(fromStore.getDiagramsListNetworkActive),
      this.store.select(fromStore.getDiagramsAnyNetworkActive),
    ).pipe(
      // Expression changed after it was checked error.
      delay(1),
      map(checkIfAnyAreTrue),
    );
  }
}

function checkIfAnyAreTrue(arrayOfBools: boolean[]) {
  return arrayOfBools.some((bool) => bool);
}
