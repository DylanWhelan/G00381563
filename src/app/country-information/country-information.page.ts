import { Component } from '@angular/core';
import { CovidInfoService } from '../Services/covid-info.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-country-information',
  templateUrl: './country-information.page.html',
  styleUrls: ['./country-information.page.scss'],
})
export class CountryInformationPage{

  ready: boolean = false;
  covidData:any;
  countryToView:string;

  constructor(private storage:Storage, private covidService:CovidInfoService) { }

  ionViewDidEnter() {
    this.storage.get('storedCountry')
    .then((data)=>{
      this.covidService.GetCovidData(data).subscribe(
        (data)=>{
        this.covidData = data.All;
        this.ready = true;
      })
    })
    .catch()
  }
}
