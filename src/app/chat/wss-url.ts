import { InjectionToken } from '@angular/core';

export const WSSUrl = new InjectionToken('WSSUrl', {
  providedIn: 'root',
  factory: () =>
    'wss://arck7yanq2.execute-api.us-east-1.amazonaws.com/production',
});
