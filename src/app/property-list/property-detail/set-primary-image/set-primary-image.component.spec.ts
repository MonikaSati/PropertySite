import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPrimaryImageComponent } from './set-primary-image.component';

describe('SetPrimaryImageComponent', () => {
  let component: SetPrimaryImageComponent;
  let fixture: ComponentFixture<SetPrimaryImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetPrimaryImageComponent]
    });
    fixture = TestBed.createComponent(SetPrimaryImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
