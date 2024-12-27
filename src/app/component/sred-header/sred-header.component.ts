import { Component } from '@angular/core';
import { SredTabsComponent } from "../sred-tabs/sred-tabs.component";

@Component({
  selector: 'app-sred-header',
  standalone: true,
  imports: [SredTabsComponent],
  templateUrl: './sred-header.component.html',
  styleUrl: './sred-header.component.scss'
})
export class SredHeaderComponent {

}
