import { InjectionToken } from "@angular/core";

export const WSSUrl = new InjectionToken('WSSUrl', {
    providedIn: 'root',
    factory: () => 'wss://h269aj6s0h.execute-api.us-east-1.amazonaws.com/production'
})