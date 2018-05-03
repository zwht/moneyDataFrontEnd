import { TestBed, inject } from '@angular/core/testing';

import { IsImgService } from './is-img.service';

describe('IsImgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsImgService]
    });
  });

  it('should be created', inject([IsImgService], (service: IsImgService) => {
    expect(service).toBeTruthy();
  }));
});
