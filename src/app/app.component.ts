import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '@tz/user';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'tz-root',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [
    NgIf,
    AsyncPipe,
    RouterModule
  ],
  template: `
    <div style="margin: auto; width: 25%; height: 25%;">
      <h2 *ngIf="userNotSelected$ | async">Pick a user for sign-in</h2>
      <router-outlet />
    </div>
  `,
})
export class AppComponent {
  title = 'talkiz';

  userNotSelected$ = this.userService.selectedUser$.pipe(
    map(user => !user),
    startWith(true)
  );

  constructor(private readonly userService: UserService) {}
}
