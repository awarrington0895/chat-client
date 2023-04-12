import { Component} from '@angular/core';
import { MatListModule } from '@angular/material/list';

import users from './users';

@Component({
    standalone: true,
    selector: 'tz-user-select',
    imports: [MatListModule],
    template: `
        <mat-action-list>
            <button mat-list-item (click)="handleClick()">{{ user.name }}</button>
        </mat-action-list>
    `
})
export class UserSelectComponent {
    user = users[0];

    handleClick() {
        console.log('Selected user');
    }
}