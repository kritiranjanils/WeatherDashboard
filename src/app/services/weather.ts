import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '02480886252ce6b0b60eb050266967fc';
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.baseUrl}?q=${city}&units=metric&appid=${this.apiKey}`;
    return this.http.get(url).pipe(
      catchError(err => {
        console.error('API Error', err);
        return throwError(() => err);
      })
    );
  }
}