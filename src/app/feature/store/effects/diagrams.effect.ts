import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { DiagramsService } from "../../services";
import * as diagramsActions from "../actions/diagram.actions";

@Injectable()
export class DiagramsEffects {
  constructor(
    private actions$: Actions,
    private diagramsService: DiagramsService
  ) {}

  @Effect()
  loadDiagram = this.actions$.ofType(diagramsActions.LOAD_DIAGRAM).pipe(
    switchMap((action: diagramsActions.LoadDiagram) => {
      return this.diagramsService
        .getWithAllRelationshipArrays(action.payload)
        .pipe(
          map(diagram => {
            return new diagramsActions.LoadDiagramSuccess(diagram);
          }),
          catchError(error =>
            of(
              new diagramsActions.DiagramFailure({
                error,
                diagramId: action.payload
              })
            )
          )
        );
    })
  );
}
