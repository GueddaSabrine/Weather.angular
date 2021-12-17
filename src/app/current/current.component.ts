import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { CurrentWeather } from '../current-weather';
// import { map } from 'rxjs';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
  myWeather!:CurrentWeather;
  location!: any;

  constructor(private ws:WeatherService) { }

  ngOnInit() {
    this.myWeather = this.ws.weatherNow();
    navigator.geolocation.getCurrentPosition((pos)=>{
      this.location = pos.coords;
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      this.ws.localWeather(lat, lon).subscribe(
        (data => {
          console.log(data);
          this.myWeather = new CurrentWeather(data.myWeater.cityName,
                                              data.myWeater.temp,
                                              data.myWeater.img,
                                              data.myWeater.weatherKind,
                                              data.myWeater.tempMax,
                                              data.myWeater.tempMin,)
        })
      )
    }
    )

}}