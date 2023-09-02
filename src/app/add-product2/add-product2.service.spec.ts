import { TestBed } from '@angular/core/testing';

import { AddProduct2Service } from './add-product2.service';

describe('AddProduct2Service', () => {
  let service: AddProduct2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddProduct2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
