import { Inject, Injectable, OnDestroy } from '@angular/core';
import { filter, map, retry, switchMap, takeUntil, tap } from 'rxjs/operators';
import { webSocket } from 'rxjs/webSocket';
import { WSSUrl } from './wss-url';
import { UserService } from './user.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService implements OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(
    @Inject(WSSUrl) private readonly url: string,
    private readonly userService: UserService
  ) {}

  // private connection$ = webSocket({
  //   url: this.url
  // });

  private sendMessageSubject = new Subject<{ action: string, message: string | null | undefined}>();

  myMessages$ = this.sendMessageSubject.pipe(
    map(payload => payload.message),
    filter(Boolean),
    map(message => `Me: ${message}`)
  );

  private connection$: Observable<string> = this.userService.selectedUser$.pipe(
    switchMap((user) => {
      const ws = webSocket({
        url: `${this.url}?access_token=${user.token}`,
      });

      this.sendMessageSubject.pipe(takeUntil(this.destroy$)).subscribe(ws);


      return ws;
    }),
    map(val => val as string)
  );

  messages$: Observable<string> = this.connection$.pipe(
    retry({
      delay: 1000,
    })
  );

  sendMessage(message: string | null | undefined) {
    const params = {
      action: 'sendmessage',
      message,
    };

    this.sendMessageSubject.next(params);
  }

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }
}
