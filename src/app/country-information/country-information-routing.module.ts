import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryInformationPage } from './country-information.page';

const routes: Routes = [
  {
    path: '',
    component: CountryInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryInformationPageRoutingModule {}
