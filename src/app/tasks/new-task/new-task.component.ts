import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../taks/task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input ({required: true}) userId!: string;

  model : Task = {
    id: '',
    title: '',
    dueDate: '',
    userId: this.userId,
    summary: '',
  };
  @Output() taskAdded = new EventEmitter<Task>();

  onSubmit() {
    this.taskAdded.emit(this.model);
    this.model = {
      id: '',
      title: '',
      dueDate: '',
      userId: this.userId,
      summary: '',
    };
  }

}
