import { Component } from "@angular/core";
import { ChatService } from "./chat.service";
import { MatCardModule } from '@angular/material/card';
import { NgForOf } from "@angular/common";
import { MatListModule } from "@angular/material/list";

@Component({
    standalone: true,
    selector: 'tz-chat-display',
    imports: [
        NgForOf,
        MatCardModule,
        MatListModule
    ],
    template: `
        <mat-card style="height: 17rem; width: 33rem; overflow-y: auto;">
            <mat-card-content>
                <mat-list>
                    <mat-list-item *ngFor="let message of messageHistory">{{ message }}</mat-list-item>
                </mat-list>
            </mat-card-content>
        </mat-card>
    `
})
export class ChatDisplayComponent {
    messageHistory = [
        'hello',
        'sir',
        'hello',
        'hello',
        'hello',
        'hello',
        'hello',
        'sir',
        'sir',
        'sir',
        'sir',
        'sir',
    ];

    constructor(private readonly chat: ChatService) {}
}