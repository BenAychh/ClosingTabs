import { inject, TestBed } from '@angular/core/testing';

import { DiagramsService } from './diagrams.service';

describe('DiagramsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiagramsService],
    });
  });

  it('should be created', inject([DiagramsService], (service: DiagramsService) => {
    expect(service).toBeTruthy();
  }));
});
