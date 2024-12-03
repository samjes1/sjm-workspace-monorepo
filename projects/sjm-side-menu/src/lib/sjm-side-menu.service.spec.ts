import { TestBed } from '@angular/core/testing';

import { SjmSideMenuService } from './sjm-side-menu.service';

describe('SjmSideMenuService', () => {
  let service: SjmSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SjmSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
