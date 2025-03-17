import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedUserId? : string;

  onSelectUser(userId: string){
    this.selectedUserId = userId;
  }

  get selectedUser(){
    return DUMMY_USERS.find(user => user.id === this.selectedUserId);

  }

  get users(){
    return DUMMY_USERS;
  }
}
