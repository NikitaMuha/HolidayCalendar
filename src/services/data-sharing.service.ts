import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private dataSubject = new BehaviorSubject<Country>({
    "countryCode": "UA",
    "name": "Ukraine"
  });
  public currentData$ = this.dataSubject

  public setData(data: Country) {
    this.dataSubject.next(data);
  }
}
