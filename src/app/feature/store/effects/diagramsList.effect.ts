import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { DiagramsService } from '../../services/diagrams.service';
import * as diagramsListActions from '../actions/diagramsList.actions';

@Injectable()
export class DiagramsListEffects {
  constructor(private actions$: Actions, private diagramsService: DiagramsService) {}

  @Effect()
  loadDiagramsList$ = this.actions$.ofType(diagramsListActions.LOAD_DIAGRAMS_LIST).pipe(
    switchMap(() => {
      return this.diagramsService.getAll().pipe(
        map((diagrams) => new diagramsListActions.LoadDiagramsListSuccess(diagrams)),
        catchError((error) => of(new diagramsListActions.LoadDiagramsListFail(error))),
      );
    }),
  );
}
