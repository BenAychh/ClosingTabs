import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IDiagram } from '../../models/diagram.model';
import * as fromStore from '../../store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-display-diagram',
  styleUrls: ['./display-diagram.component.scss'],
  templateUrl: './display-diagram.component.html',
})
export class DisplayDiagramComponent implements OnInit {
  public _diagram: IDiagram;

  @Input()
  set diagram(diagram: IDiagram) {
    this._diagram = diagram;
  }
  constructor(private store: Store<fromStore.FeatureState>) {}

  ngOnInit() {}
}
