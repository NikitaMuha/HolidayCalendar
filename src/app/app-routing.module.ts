import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CountryPageComponent } from './components/country-page/country-page.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
  },

  {
    path: 'country',
    component: CountryPageComponent,
  },

  { 
    path: '**', 
    redirectTo: '/main' 
  }, 

  { 
    path: '', 
    redirectTo: '/main', 
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
