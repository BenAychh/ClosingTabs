import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';
import * as fromRoot from '../../../store';
import { IDiagram } from '../../models/diagram.model';
import { ITab } from '../../models/tab.model';
import * as fromStore from '../../store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-feature-home',
  styleUrls: ['./feature-home.component.scss'],
  templateUrl: './feature-home.component.html',
})
export class FeatureHomeComponent implements OnInit {
  tabs$: Observable<ITab[]>;
  selectedIndex$: Observable<number>;
  diagramsMap$: Observable<{ [key: string]: IDiagram }>;
  constructor(
    private store: Store<fromStore.FeatureState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.tabs$ = this.store.select(fromStore.getAllTabs);
    this.selectedIndex$ = this.store.select(fromStore.getCurrentTabIndex);
    this.diagramsMap$ = this.store.select(fromStore.getDiagramsEntities);
    this.store
      .select(fromRoot.getRouterState)
      .pipe(first())
      .subscribe((routerState) => {
        if (routerState.state.queryParams) {
          const { type, id } = routerState.state.queryParams;
          if (type && id) {
            this.store.dispatch(new fromStore.AddTab({ type, id }));
          }
        }
      });
  }

  trackByFn(tab: ITab) {
    return tab.id;
  }

  closeTab($event: Event, id: string) {
    $event.stopPropagation();
    this.store.dispatch(new fromStore.RemoveTab(id));
  }

  handleTabChange(index: number) {
    this.store.dispatch(new fromStore.SetTabIndex(index));
    this.store
      .select(fromStore.getCurrentTabEntity)
      .pipe(first())
      .subscribe((tab) => {
        if (tab) {
          this.router.navigate([''], {
            queryParams: { type: tab.type, id: tab.id },
            relativeTo: this.activatedRoute,
          });
        } else {
          this.router.navigate([''], { relativeTo: this.activatedRoute });
        }
      });
  }

  getName(tab: ITab): Observable<string> {
    if (tab.type === 'diagram') {
      return this.getDiagramName(tab);
    }
  }

  getDiagramName(tab: ITab): Observable<string> {
    return this.diagramsMap$.pipe(
      filter(filterUntilData),
      map((diagramsMap) => {
        return diagramsMap[tab.id] ? diagramsMap[tab.id].name : '';
      }),
    );
  }
}

function filterUntilData(thing: any) {
  return !!thing;
}
