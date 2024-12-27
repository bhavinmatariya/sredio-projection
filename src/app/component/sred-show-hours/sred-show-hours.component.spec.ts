import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SredShowHoursComponent } from './sred-show-hours.component';

describe('SredShowHoursComponent', () => {
  let component: SredShowHoursComponent;
  let fixture: ComponentFixture<SredShowHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SredShowHoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SredShowHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
