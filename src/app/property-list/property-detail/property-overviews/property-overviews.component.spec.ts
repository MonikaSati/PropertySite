import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyOverviewsComponent } from './property-overviews.component';

describe('PropertyOverviewsComponent', () => {
  let component: PropertyOverviewsComponent;
  let fixture: ComponentFixture<PropertyOverviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyOverviewsComponent]
    });
    fixture = TestBed.createComponent(PropertyOverviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
