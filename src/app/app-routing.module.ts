import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidaysModule } from './holidays/holidays.module';
import { CountriesListComponent } from './holidays/components/countries-list/countries-list.component';
import { countriesResolver } from './holidays/resolvers/countries.resolver';
import { CountryPageComponent } from './holidays/components/country-page/country-page.component';
import { singleCountyResolver } from './holidays/resolvers/single-county.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  {
    path: 'countries',
    component: CountriesListComponent,
    resolve: { countries: countriesResolver },
  },
  {
    path: 'countries/:id',
    component: CountryPageComponent,
    resolve: { holidays: singleCountyResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HolidaysModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
