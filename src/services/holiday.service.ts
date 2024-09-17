import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Country, CountryInfo, Holiday } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
private http = inject(HttpClient);

private readonly apiUrl = environment.apiUrl

public getCountries(): Observable<Country[]> {
  return this.http.get<Country[]>(`${this.apiUrl}/v3/AvailableCountries`)
}
public getCountryInfo(code: string): Observable<CountryInfo> {
  return this.http.get<CountryInfo>(`${this.apiUrl}/v3/CountryInfo/${code}`)
}
public getHolidaysInfo(year: number, countryCode: string): Observable<Holiday[]> {
  return this.http.get<Holiday[]>(`${this.apiUrl}/v3/PublicHolidays/${year}/${countryCode}`)
}
public getRandomHoliday(): Observable<Holiday[]> {
  return this.http.get<Holiday[]>(`${this.apiUrl}/v3/NextPublicHolidaysWorldwide`)
}
}
