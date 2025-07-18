import { Component } from '@angular/core';
import { WeatherTableComponent } from '../weather-table/weather-table';
import { WeatherChartComponent } from '../weather-chart/weather-chart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  imports: [WeatherTableComponent, WeatherChartComponent],
})
export class Dashboard {
  cities = ['London', 'New York', 'Tokyo', 'Delhi'];
}
