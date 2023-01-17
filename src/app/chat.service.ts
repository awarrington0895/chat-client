import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private connection$ = webSocket({
    url: 'wss://0bzrz66p8f.execute-api.us-east-1.amazonaws.com/production',
  });

  messages$ = this.connection$.asObservable();

  sendMessage(message: string | null | undefined) {
    const params = {
      action: 'sendmessage',
      message,
    };

    this.connection$.next(params);
  }
}
