import { Component, inject, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { HolidayService } from '../../../services/holiday.service';
import { Country } from '../../../interfaces/country.interface';
import { Unsubscribe } from '../../../services/unsubscribe';
import { DataSharingService } from '../../../services/data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent extends Unsubscribe implements OnInit {
  private holidayService = inject(HolidayService);
  private dataSharing = inject(DataSharingService);
  private router = inject(Router);

  public autocompleteArray: Country[] = [];
  public countriesList$ = this.holidayService.getCountries();

constructor(){
  super();
}

ngOnInit(): void {
  this.countriesList$
  .pipe(
    debounceTime(500), 
    distinctUntilChanged(), 
    takeUntil(this.$destroy) 
  )
  .subscribe((val) =>{
    this.autocompleteArray = val;
  }
  )
}
  public countrySearch(val: Country): void {
      this.dataSharing.setData(val)
      this.router.navigate(['/country']);
    }
}
