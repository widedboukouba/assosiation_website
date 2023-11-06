import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpreComponent } from './ppre.component';

describe('PpreComponent', () => {
  let component: PpreComponent;
  let fixture: ComponentFixture<PpreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PpreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
