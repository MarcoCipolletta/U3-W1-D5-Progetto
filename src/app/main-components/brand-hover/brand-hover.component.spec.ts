import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandHoverComponent } from './brand-hover.component';

describe('BrandHoverComponent', () => {
  let component: BrandHoverComponent;
  let fixture: ComponentFixture<BrandHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandHoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
