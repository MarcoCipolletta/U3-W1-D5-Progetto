import { Component } from '@angular/core';

@Component({
  selector: 'app-brand-hover',
  templateUrl: './brand-hover.component.html',
  styleUrl: './brand-hover.component.scss',
})
export class BrandHoverComponent {
  audiOver: boolean = false;
  fiatOver: boolean = false;
  fordOver: boolean = false;
  toyotaOver: boolean = false;
  volkswagenOver: boolean = false;
}
