import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesListComponent } from './countries-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CountriesListComponent', () => {
  let component: CountriesListComponent;
  let fixture: ComponentFixture<CountriesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesListComponent],
      imports: [RouterTestingModule, SharedModule, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(CountriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
