import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { tap } from 'rxjs';
import { ChatService } from './chat.service';

@Component({
  selector: 'talkiz-root',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [
    NgForOf,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  template: `
    <div style="margin: auto; width: 25%; height: 25%;">
      <p *ngFor="let message of messages">From WS: {{ message }}</p>

      <form [formGroup]="form" (ngSubmit)="sendMessage()">
        <mat-form-field appearance="fill">
          <mat-label>Type your message here</mat-label>
          <input formControlName="message" matInput />
        </mat-form-field>
      </form>
    </div>
  `,
})
export class AppComponent {
  title = 'talkiz';

  form = this.fb.group({
    message: new FormControl(''),
  });

  messages = ['Test message'] as any[];

  constructor(
    private readonly chatService: ChatService,
    private readonly fb: FormBuilder
  ) {
    this.chatService.messages$
      .pipe(tap((message) => (this.messages = [...this.messages, message])))
      .subscribe();
  }

  sendMessage() {
    this.chatService.sendMessage(this.form.value.message);
    this.form.reset();
  }
}
