import { TestBed } from '@angular/core/testing';

import { PreloadService } from './preload.service';

xdescribe('PreloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreloadService = TestBed.get(PreloadService);
    expect(service).toBeTruthy();
  });
});
