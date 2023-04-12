import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'tz-root',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterModule
  ],
  template: `
    <div style="margin: auto; width: 25%; height: 25%;">
      <!-- <p *ngFor="let message of messages">From WS: {{ message }}</p>

       -->
      <router-outlet />
    </div>
  `,
})
export class AppComponent {
  title = 'talkiz';
}
