import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IDiagram } from '../../models/diagram.model';
import * as fromStore from '../../store';

@Component({
  selector: 'app-view-diagram',
  styleUrls: ['./view-diagram.component.scss'],
  templateUrl: './view-diagram.component.html',
})
export class ViewDiagramComponent implements OnInit {
  diagram$: Observable<IDiagram>;

  @Input() diagramId: string;

  constructor(private store: Store<fromStore.FeatureState>) {}

  ngOnInit() {
    this.diagram$ = this.store.select(fromStore.getSelectedDiagram(this.diagramId));
    this.store.dispatch(new fromStore.LoadDiagram(this.diagramId));
  }
}
