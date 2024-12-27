import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SredTabsComponent } from './sred-tabs.component';

describe('SredTabsComponent', () => {
  let component: SredTabsComponent;
  let fixture: ComponentFixture<SredTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SredTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SredTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
