import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessesListItemComponent } from './businesses-list-item.component';

describe('BusinessesListItemComponent', () => {
  let component: BusinessesListItemComponent;
  let fixture: ComponentFixture<BusinessesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessesListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
