import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-country-selection',
  templateUrl: './country-selection.page.html',
  styleUrls: ['./country-selection.page.scss'],
})
export class CountrySelectionPage implements OnInit {

  countries: string[] = ["Ireland", "France", "Germany", "Italy", "Spain", "Poland", "Romania", "Netherlands", "Belgium", "Greece", "Portugal", "Sweden", "Austria", "Switzerland", "Denmark", "Finland", "Norway"];
  countrySelected: string;

  constructor(private storage:Storage, private navCtrl:NavController) { }

  ngOnInit() {
    this.storage.get("storedCountry")
    .then((data)=>{
      this.countrySelected = data;
    })
    .catch()
  }

  updateSelectedCountry(){
    this.storage.set("storedCountry", this.countrySelected)
    .then(()=>{
      this.navCtrl.navigateBack('/home');
    })
    .catch()
  }
}
