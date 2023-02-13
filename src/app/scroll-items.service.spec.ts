import { TestBed } from '@angular/core/testing';

import { ScrollItemsService } from './scroll-items.service';

describe('ScrollItemsService', () => {
  let service: ScrollItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
