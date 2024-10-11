import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AudiComponent } from './pages/audi/audi.component';
import { FordComponent } from './pages/ford/ford.component';
import { FiatComponent } from './pages/fiat/fiat.component';
import { ToyotaComponent } from './pages/toyota/toyota.component';
import { VolkswagenComponent } from './pages/volkswagen/volkswagen.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'audi',
    component: AudiComponent,
  },
  {
    path: 'fiat',
    component: FiatComponent,
  },
  {
    path: 'ford',
    component: FordComponent,
  },
  {
    path: 'toyota',
    component: ToyotaComponent,
  },
  {
    path: 'volkswagen',
    component: VolkswagenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
