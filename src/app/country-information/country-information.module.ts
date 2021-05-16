import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryInformationPageRoutingModule } from './country-information-routing.module';

import { CountryInformationPage } from './country-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryInformationPageRoutingModule
  ],
  declarations: [CountryInformationPage]
})
export class CountryInformationPageModule {}
