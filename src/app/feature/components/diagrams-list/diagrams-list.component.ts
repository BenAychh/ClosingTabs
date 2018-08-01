import { ChangeDetectionStrategy, Component, Input, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { IDiagram } from '../../models/diagram.model';
import * as fromStore from '../../store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-diagrams-list',
  styleUrls: ['./diagrams-list.component.scss'],
  templateUrl: './diagrams-list.component.html',
})
export class DiagramsListComponent implements OnInit, OnChanges {
  @Input() diagramsList: IDiagram[];
  constructor(private store: Store<fromStore.FeatureState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadDiagramsList());
  }

  ngOnChanges() {
    console.log(this.diagramsList);
  }

  trackByFn(diagram: IDiagram) {
    return diagram.id;
  }

  handleClick(diagram: IDiagram) {
    this.store.dispatch(
      new fromStore.AddTab({
        id: diagram.id,
        type: 'diagram',
      }),
    );
  }
}
