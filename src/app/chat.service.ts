import { Inject, Injectable } from '@angular/core';
import { retry, tap } from 'rxjs/operators';
import { webSocket } from 'rxjs/webSocket';
import { WSSUrl } from './wss-url';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(@Inject(WSSUrl) private readonly url: string) {}

  private connection$ = webSocket({
    url: this.url
  });

  messages$ = this.connection$.pipe(
    retry({
      delay: 10
    })
  );

  sendMessage(message: string | null | undefined) {
    const params = {
      action: 'sendmessage',
      message,
    };

    this.connection$.next(params);
  }
}
