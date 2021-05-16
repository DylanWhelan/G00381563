import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  countrySelected:string;

  constructor(private storage:Storage, private navCtrl:NavController) {}

  ionViewWillEnter() {
    this.storage.get('storedCountry')
    .then((data)=>{
      if(data!=null){
        this.countrySelected = data;
      }
      else{
        this.countrySelected = "Ireland";
      }
    })
    .catch()
  }

  openCountrySelectionPage(){
    this.navCtrl.navigateForward('/country-selection');
  }

  openCountryInfoPage(){
    this.navCtrl.navigateForward('/country-information');
  }

  openProjectCreditsPage(){
    this.navCtrl.navigateForward('/project-credits');
  }
}
