import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SredShowHoursComponent } from '../sred-show-hours/sred-show-hours.component';

@Component({
  selector: 'app-sred-tabs',
  standalone: true,
  imports: [MatButtonToggleModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sred-tabs.component.html',
  styleUrl: './sred-tabs.component.scss',
})
export class SredTabsComponent {}
