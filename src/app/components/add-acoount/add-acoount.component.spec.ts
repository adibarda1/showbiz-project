import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcoountComponent } from './add-acoount.component';

describe('AddAcoountComponent', () => {
  let component: AddAcoountComponent;
  let fixture: ComponentFixture<AddAcoountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAcoountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAcoountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
