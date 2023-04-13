import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSafeHouseComponent } from './new-safe-house.component';

describe('NewSafeHouseComponent', () => {
  let component: NewSafeHouseComponent;
  let fixture: ComponentFixture<NewSafeHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSafeHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSafeHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
