import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task2',
  imports: [],
  templateUrl: './new-task2.component.html',
  styleUrl: './new-task2.component.css'
})
export class NewTask2Component {
  @Output() cancel = new EventEmitter<void>();
  enteredTitle = '';

  onCancel() {
    this.cancel.emit();
  }

}
