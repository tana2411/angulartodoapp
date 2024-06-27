import { Component, EventEmitter, Input,Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

import { User } from './user.model';
import { NewUserComponent } from "./new-user/new-user.component";

const randomIndex= Math.floor(Math.random()* DUMMY_USERS.length)


@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [NewUserComponent]
})
export class UserComponent {
@Input({required:true}) user!:User;
@Input({required:true}) selected!:boolean;
@Output() select = new EventEmitter<string>();


onSelectUser()
{
  this.select.emit(this.user.id);
}
}
