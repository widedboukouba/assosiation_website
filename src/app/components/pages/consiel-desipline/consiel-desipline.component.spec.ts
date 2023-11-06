import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsielDesiplineComponent } from './consiel-desipline.component';

describe('ConsielDesiplineComponent', () => {
  let component: ConsielDesiplineComponent;
  let fixture: ComponentFixture<ConsielDesiplineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsielDesiplineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsielDesiplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
