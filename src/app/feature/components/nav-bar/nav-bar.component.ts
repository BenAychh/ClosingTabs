import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IDiagram } from '../../models/diagram.model';
import * as fromStore from '../../store';

@Component({
  selector: 'app-nav-bar',
  styleUrls: ['./nav-bar.component.scss'],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit {
  diagramsList$: Observable<IDiagram[]>;
  constructor(private store: Store<fromStore.FeatureState>) {}

  ngOnInit() {
    this.diagramsList$ = this.store.select(fromStore.getDiagramsList);
  }
}
