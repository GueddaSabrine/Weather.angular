import { Injectable } from '@angular/core';
import { CurrentWeather } from '../current-weather';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  current:CurrentWeather = new CurrentWeather('New York', '80',
  'https://cdn-icons-png.flaticon.com/512/979/979585.png','sunny',
  '96', '72')

  constructor(private http: HttpClient) { }

  weatherNow() {
    return this.current;
  }

  localWeather(lat:number, lon:number){
    return this.http.get<any>(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=18d2f7cb2e60dde568d95c77154a81d8&units=imperial`).pipe(map((response: Response) => response.json()));
    }
}
