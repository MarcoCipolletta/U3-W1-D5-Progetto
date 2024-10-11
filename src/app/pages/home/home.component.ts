import { Component } from '@angular/core';
import { icar } from '../../interfaces/icar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cars: icar[] = [];
  twoRndmCar: icar[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((res) => <Promise<icar[]>>res.json())
      .then((arr) => {
        const arrayIndexRndmCars: number[] = [];
        while (this.twoRndmCar.length < 2) {
          let randomCarIndex = Math.floor(Math.random() * arr.length);

          if (!arrayIndexRndmCars.includes(randomCarIndex)) {
            this.twoRndmCar.push(arr[randomCarIndex]);
            arrayIndexRndmCars.push(randomCarIndex);
          }
        }
      });
  }
}
