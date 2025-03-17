import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() userSelected = new EventEmitter<string>();

  get imgAvatar(){
    return "assets/users/"+this.user.avatar;
  }

  selectUser(user: User){
    this.userSelected.emit(user.id);
  }
}
