import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { CurrentWeather } from '../current-weather';
import { Data } from '@angular/router';
// import {Promise} from 
// import { map } from 'rxjs';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
  myWeather!:CurrentWeather;
  location!: GeolocationCoordinates;

  constructor(private ws:WeatherService) { }

  ngOnInit() {
    this.myWeather = this.ws.weatherNow();
    navigator.geolocation.getCurrentPosition((pos)=>{
      this.location = pos.coords;
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      this.ws.localWeather(lat, lon).subscribe(
        (Promise.then(data => {
          console.log(data);

          this.myWeather = new CurrentWeather(data.name,
            data.main.temp,
            data.weather[0].icon,
            data.weather[0].description,
            data.main.temp_max,
            data.main.temp_min);
        }))
      )
    }
    )

}}