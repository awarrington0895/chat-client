import { Component } from "@angular/core";
import { ChatService } from "./chat.service";
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe, NgForOf } from "@angular/common";
import { MatListModule } from "@angular/material/list";
import { Observable, map, merge, scan } from "rxjs";
import { UserService } from "@tz/user";

@Component({
    standalone: true,
    selector: 'tz-chat-display',
    imports: [
        NgForOf,
        AsyncPipe,
        MatCardModule,
        MatListModule
    ],
    template: `
        <h2>Signed in as {{ currentUser$ | async }}</h2>
        <mat-card style="height: 17rem; width: 33rem; overflow-y: auto; margin-top: 2rem; margin-bottom: 2rem;">
            <mat-card-content>
                <mat-list>
                    <mat-list-item *ngFor="let message of messageHistory$ | async">{{ message }}</mat-list-item>
                </mat-list>
            </mat-card-content>
        </mat-card>
    `
})
export class ChatDisplayComponent {

    currentUser$ = this.userService.selectedUser$.pipe(
        map(user => user.name)
    );

    messageHistory$: Observable<string[]> = merge(this.chat.messages$, this.chat.myMessages$).pipe(
        scan((acc: string[], curr: string) => acc.concat([curr]), [] as string[])
    );

    constructor(private readonly chat: ChatService, private readonly userService: UserService) {}
}