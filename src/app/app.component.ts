import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-user';
import { TasksComponent } from "./tasks/tasks.component";
import { NewUserComponent } from "./user/new-user/new-user.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, UserComponent, TasksComponent, NewUserComponent]
})
export class AppComponent {
users=DUMMY_USERS;
selectedUserId?:string;
get selectedUser(){
  return this.users.find((user)=>user.id===this.selectedUserId)!;
}
onSelecteUser(id:string)
{
this.selectedUserId=id}


OnAddUser(){
}

}
