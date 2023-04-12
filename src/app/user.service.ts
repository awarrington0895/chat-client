import { Injectable } from "@angular/core";
import { ReplaySubject, of } from "rxjs";
import users, { User } from "./users";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    readonly users$ = of(users);

    readonly selectedUser$ = new ReplaySubject<User>(1);
}