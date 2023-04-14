import { Component } from '@angular/core';
import { AsyncPipe, NgForOf } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { User } from './users';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'tz-user-select',
  imports: [NgForOf, AsyncPipe, MatListModule],
  template: `
    <mat-action-list>
      <button
        *ngFor="let user of users$ | async"
        mat-list-item
        (click)="logIn(user)"
      >
        {{ user.name }}
      </button>
    </mat-action-list>
  `,
})
export class UserSelectComponent {
  users$ = this.userService.users$;

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  logIn(user: User) {
    this.userService.selectedUser$.next(user);
    this.router.navigate(['chat']);
  }
}
