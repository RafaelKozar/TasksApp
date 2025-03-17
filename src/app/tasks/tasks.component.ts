import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from "../taks/task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask2Component } from "./new-task2/new-task2.component";

type Task = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
};

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent, NewTask2Component],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  AddTaskClicked = false;
  isAddingTask = false;

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;



  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn allW the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUser() {
    return this.tasks.filter(task => task.userId === this.userId);
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }


  onStartAddTask() {
    this.AddTaskClicked = !this.AddTaskClicked;
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onTaskAdded(task: Task) {
    task.id = 't' + (this.tasks.length + 1);
    this.tasks.push(task);
  }



}
