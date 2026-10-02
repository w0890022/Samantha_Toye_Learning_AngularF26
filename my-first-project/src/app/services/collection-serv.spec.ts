import { TestBed } from '@angular/core/testing';
import { CollectionServ } from './collection-serv';

describe('CollectionServ', () => {
  let service: CollectionServ;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
