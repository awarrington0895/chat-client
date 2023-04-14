import { Component } from "@angular/core";
import { ChatDisplayComponent } from "./chat-display.component";
import { ChatFormComponent } from "./chat-form.component";

@Component({
    standalone: true,
    selector: 'tz-chat',
    imports: [
        ChatDisplayComponent,
        ChatFormComponent
    ],
    template: `
        <tz-chat-display />
        <tz-chat-form />
    `
})
export class ChatComponent {}