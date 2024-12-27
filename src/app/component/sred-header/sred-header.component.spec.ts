import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SredHeaderComponent } from './sred-header.component';

describe('SredHeaderComponent', () => {
  let component: SredHeaderComponent;
  let fixture: ComponentFixture<SredHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SredHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SredHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
