import { Component, inject, OnInit } from '@angular/core';
import { CountryInfo, Holiday } from '../../../interfaces/country.interface';
import { Unsubscribe } from '../../../services/unsubscribe';
import { HolidayService } from '../../../services/holiday.service';
import { forkJoin, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent extends Unsubscribe implements OnInit {
  private holidayService = inject(HolidayService);

public randomHolidays: Holiday[] = [];
public countries: CountryInfo[] = []

constructor () {
  super();
}

ngOnInit(): void {
  this.holidayService.getRandomHoliday().pipe(
    map(holidays => holidays.slice(0, 3)), 
    switchMap((firstThree) => {
      this.randomHolidays = firstThree;
      const countryInfoRequests = firstThree.map(holiday => 
        this.holidayService.getCountryInfo(holiday.countryCode)
      );
      return forkJoin(countryInfoRequests);
    })
  ).subscribe(countries => {
    this.countries = countries;
  });
}
}


