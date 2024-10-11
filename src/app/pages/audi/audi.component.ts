import { Component } from '@angular/core';
import { icar } from '../../interfaces/icar';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss',
})
export class AudiComponent {
  audiCars: icar[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((res) => <Promise<icar[]>>res.json())
      .then((arr) => {
        const cars = arr.filter((car) => car.brand.toLowerCase() === 'audi');
        this.audiCars = [...cars];
      });
  }
}
