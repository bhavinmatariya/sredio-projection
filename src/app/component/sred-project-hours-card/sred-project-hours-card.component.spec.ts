import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SredProjectHoursCardComponent } from './sred-project-hours-card.component';

describe('SredProjectHoursCardComponent', () => {
  let component: SredProjectHoursCardComponent;
  let fixture: ComponentFixture<SredProjectHoursCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SredProjectHoursCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SredProjectHoursCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
