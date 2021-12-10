import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Weather } from 'src/app/Models/Wather';
import { WatherService } from 'src/app/service/wather.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
  @Output() onSelection: EventEmitter<Weather> = new EventEmitter<Weather>()
  weather: Weather = new Weather()
  city: String = "paris"
  constructor( private weatherData: WatherService) { }

  ngOnInit(): void {
    
  }
  submit() {
    this.weatherData.get(this.city).subscribe(data => {
      this.weather.city = data['name'] 
      this.weather.conditions = data['weather'][0]['main']
      this.weather.temperature = Math.round((data['main']['temp'] - 273.15)*1.8 + 32)
      this.weather.icon = this.weatherData.getIconUrl(data['weather'][0]['icon'])
      
      this.onSelection.emit(this.weather)
      
    })
  }


}
