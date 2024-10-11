import { Component } from '@angular/core';
import { icar } from '../../interfaces/icar';

@Component({
  selector: 'app-toyota',
  templateUrl: './toyota.component.html',
  styleUrl: './toyota.component.scss',
})
export class ToyotaComponent {
  toyotaCars: icar[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((res) => <Promise<icar[]>>res.json())
      .then((arr) => {
        const cars = arr.filter((car) => car.brand.toLowerCase() === 'toyota');
        this.toyotaCars = [...cars];
      });
  }
}
