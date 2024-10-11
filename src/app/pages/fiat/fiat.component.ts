import { Component } from '@angular/core';
import { icar } from '../../interfaces/icar';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss',
})
export class FiatComponent {
  fiatCars: icar[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((res) => <Promise<icar[]>>res.json())
      .then((arr) => {
        const cars = arr.filter((car) => car.brand.toLowerCase() === 'fiat');
        this.fiatCars = [...cars];
      });
  }
}
