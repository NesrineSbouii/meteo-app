import { Weather } from './../../Models/Wather';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  weather: Weather = {
    city: "No City",
    conditions: "-",
    temperature: 0,
    icon: ""
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  update(weather: Weather) {
    this.weather = weather
  }

}
