import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private connection$ = webSocket({
    url: environment.webSocketUrl,
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
