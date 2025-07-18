import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.html',
  imports: [MatCardModule, MatProgressSpinnerModule, MatTableModule, CommonModule],
  standalone: true
})
export class WeatherTableComponent implements OnInit {
  @Input() cities!: string[];
  weatherData: any[] = [];
  loading = true;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    this.cities.forEach(city => {
      this.weatherService.getWeather(city).subscribe(data => {
        this.weatherData.push(data);
        if (this.weatherData.length === this.cities.length) {
          this.loading = false;
        }
      });
    });
  }
}