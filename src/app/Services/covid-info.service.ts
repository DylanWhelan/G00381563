import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidInfoService {

  constructor(private httpClient:HttpClient) { }

  GetCovidData(countryInput):Observable<any>{
    let urlToGet = "https://covid-api.mmediagroup.fr/v1/cases?country=";
    urlToGet += countryInput;
    return this.httpClient.get(urlToGet);

  }
}
