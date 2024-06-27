import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-user';
import { UserComponent } from '../user.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {
  users=DUMMY_USERS;

constructor(){}

  newUser: any = {
    id: this.users.length + 1,
    name: ''
  };


  addUser() {
    if (this.newUser.name.trim() !== '') {
      this.users.push({ ...this.newUser });
      localStorage.setItem('users', JSON.stringify(this.users));
      this.newUser.id = this.users.length + 1;
      this.newUser.name = '';


    }
    else{
      console.log('!!')
    }


    console.log(this.newUser)
    console.log(this.users)
}

}
