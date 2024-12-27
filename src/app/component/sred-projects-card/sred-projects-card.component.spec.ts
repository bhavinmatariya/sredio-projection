import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SredProjectsCardComponent } from './sred-projects-card.component';

describe('SredProjectsCardComponent', () => {
  let component: SredProjectsCardComponent;
  let fixture: ComponentFixture<SredProjectsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SredProjectsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SredProjectsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
