import { Inject, Injectable } from '@angular/core';
import { retry, switchMap, tap } from 'rxjs/operators';
import { webSocket } from 'rxjs/webSocket';
import { WSSUrl } from './wss-url';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(@Inject(WSSUrl) private readonly url: string, private readonly userService: UserService) {}

  private connection$ = webSocket({
    url: this.url
  });

  // private connection$ = this.userService.selectedUser$.pipe(
  //   switchMap(user => webSocket({
  //     url: `${this.url}?access_token=${user.token}`
  //   }))
  // );

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
