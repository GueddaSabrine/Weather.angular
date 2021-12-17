import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';

  constructor(private weatherService : WeatherService) {}

  ngOnInit() {
    // this.weatherService.getWeather().subscribe()
  }
}
