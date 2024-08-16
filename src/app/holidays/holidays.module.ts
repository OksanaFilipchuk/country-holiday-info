import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CountriesListComponent],
  imports: [CommonModule, HttpClientModule, SharedModule],
  exports: [CountriesListComponent],
})
export class HolidaysModule {}
