import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { UserSelectComponent } from './app/user-select.component';
import { ChatComponent } from './app/chat.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: UserSelectComponent
    },
    {
        path: 'chat',
        pathMatch: 'full',
        component: ChatComponent
    }
]

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes),
        importProvidersFrom(BrowserAnimationsModule)
    ]
}).catch((err) => console.error(err));
