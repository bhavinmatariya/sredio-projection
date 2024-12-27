import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { SredProjectHoursCardComponent } from "../sred-project-hours-card/sred-project-hours-card.component";
import { SredProjectsCardComponent } from "../sred-projects-card/sred-projects-card.component";


@Component({
  selector: 'app-sred-show-hours',
  standalone: true,
  imports: [MatTabsModule, SredProjectHoursCardComponent, SredProjectsCardComponent],
  templateUrl: './sred-show-hours.component.html',
  styleUrl: './sred-show-hours.component.scss'
})
export class SredShowHoursComponent {
  
}
