import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ChatService } from './chat.service';

@Component({
  standalone: true,
  selector: 'tz-chat-form',
  imports: [
    NgForOf,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  template: `
    <form [formGroup]="form" (ngSubmit)="sendMessage()">
      <mat-form-field appearance="fill">
        <mat-label>Type your message here</mat-label>
        <input formControlName="message" matInput />
      </mat-form-field>
    </form>
  `,
})
export class ChatFormComponent {
  form = this.fb.group({
    message: new FormControl(''),
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly chat: ChatService
  ) {}

  sendMessage() {
    this.chat.sendMessage(this.form.value.message);
    this.form.reset();
  }
}
