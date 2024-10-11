import { Component } from '@angular/core';
import { icar } from '../../interfaces/icar';

@Component({
  selector: 'app-volkswagen',
  templateUrl: './volkswagen.component.html',
  styleUrl: './volkswagen.component.scss',
})
export class VolkswagenComponent {
  volkswagenCars: icar[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((res) => <Promise<icar[]>>res.json())
      .then((arr) => {
        const cars = arr.filter(
          (car) => car.brand.toLowerCase() === 'volkswagen'
        );
        this.volkswagenCars = [...cars];
      });
  }
}
