import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSafeHouseFormComponent } from './add-safe-house-form.component';

describe('AddSafeHouseFormComponent', () => {
  let component: AddSafeHouseFormComponent;
  let fixture: ComponentFixture<AddSafeHouseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSafeHouseFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSafeHouseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
