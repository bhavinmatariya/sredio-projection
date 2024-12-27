import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './commonComponent/header/header.component';
import { SredHeaderComponent } from './component/sred-header/sred-header.component';
import { SredShowHoursComponent } from './component/sred-show-hours/sred-show-hours.component';
import { OtherExpensesComponent } from './component/other-expenses/other-expenses.component';
import { StaffSalaryComponent } from "./component/staff-salary/staff-salary.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CommonModule,
    SredHeaderComponent,
    SredShowHoursComponent,
    OtherExpensesComponent,
    StaffSalaryComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sredio-dashboard';
}
