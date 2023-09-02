import { TestBed } from '@angular/core/testing';

import { AddProduct3Service } from './add-product3.service';

describe('AddProduct3Service', () => {
  let service: AddProduct3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddProduct3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
