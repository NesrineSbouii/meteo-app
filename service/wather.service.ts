import { Observable } from 'rxjs';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WatherService {
 serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather'
 apiKey: String = "dd811fdfed176dd51ebfc10a1aff8fe1"  
  
  constructor( private http: HttpClient) { }
  //getWather(): Observable<any> {
   //return this.http.get<any>(environment.config.feedRoot + 'paris'  );
  //}


  get(city: String):Observable<any> {
    return this.http.get(this.serviceUrl + '?q=' + city + '&APPID=' + this.apiKey)
  }

  getIconUrl(icon: String) {
    return 'http://openweathermap.org/img/w/' + icon + ".png"
  }
}
