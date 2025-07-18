import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts'
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.html',
  standalone: true,
  imports: [MatCardModule, BaseChartDirective]
})
export class WeatherChartComponent implements OnInit {
  @Input() cities!: string[];

  readonly chartType = 'bar';

  chartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Temperature (°C)',
        backgroundColor: 'rgba(63,81,181,0.5)',
        borderColor: 'rgba(63,81,181,1)',
        borderWidth: 1
      }
    ]
  };

  chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: true }
    }
  };

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.fetchWeather();
  }

  fetchWeather() {
    this.cities.forEach(city => {
      this.weatherService.getWeather(city).subscribe(data => {
        (this.chartData.labels as string[]).push(city);
        (this.chartData.datasets[0].data as number[]).push(data.main.temp);
      });
    });
  }
}