import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarcelementComponent } from './harcelement.component';

describe('HarcelementComponent', () => {
  let component: HarcelementComponent;
  let fixture: ComponentFixture<HarcelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarcelementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarcelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
