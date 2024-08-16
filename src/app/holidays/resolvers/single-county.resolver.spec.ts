import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { singleCountyResolver } from './single-county.resolver';

describe('singleCountyResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => singleCountyResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
