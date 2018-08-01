import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { IDiagram } from '../models/diagram.model';

@Injectable()
export class DiagramsService {
  constructor() {}

  getWithAllRelationshipArrays(diagramId: string): Observable<IDiagram> {
    return of({
      id: diagramId,
      name: `Name: ${diagramId}`,
      description: `Description: ${diagramId}`,
    });
  }

  getAll(): Observable<IDiagram[]> {
    return of(
      Array.from(Array(3).keys()).map((n) => ({
        id: `diagram${n}`,
        name: `Name: diagram${n}`,
        description: `Description: diagram${n}`,
      })),
    );
  }
}
