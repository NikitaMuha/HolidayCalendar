import { Component, inject } from '@angular/core';
import { DataSharingService } from '../../../services/data-sharing.service';
import { switchMap, takeUntil, tap } from 'rxjs';
import { Unsubscribe } from '../../../services/unsubscribe';
import { HolidayService } from '../../../services/holiday.service';
import { Holiday } from '../../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.scss'
})
export class CountryPageComponent extends Unsubscribe {
private dataSharing = inject(DataSharingService);
private holidayService = inject(HolidayService);


public years: number[] = Array.from({ length: 11 }, (_, i) => 2020 + i);
public selectedYear!: number;
public countryCode: string ='';
public events: Holiday[] = [];

constructor() {
  super();
}

public sharedCountry$ = this.dataSharing.currentData$.pipe(
  tap((data) => {
    this.countryCode = data.countryCode;
  }),
  switchMap((data) => {
    return this.holidayService.getCountryInfo(data.countryCode);
  })
);

public selectionTrack(val: number, countryCode: string) {
  this.holidayService.getHolidaysInfo(val, countryCode)
  .pipe(
    takeUntil(this.$destroy) 
  )
  .subscribe(res => {
    this.events = res;
  })
}
}
