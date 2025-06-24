import { Component, EventEmitter, Output } from '@angular/core';
import { TaskData } from '../../interface/taskdata';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newtask-overlay',
  imports: [FormsModule],
  templateUrl: './newtask-overlay.html',
  styleUrl: './newtask-overlay.scss',
})
export class NewTaskOverlay {
  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }

  @Output() onTaskAdded = new EventEmitter<string>();

  newTask: string = '';

  addTask() {
    this.onTaskAdded.emit(this.newTask);

    // Reset newTask for next input
    this.newTask = ''; // adjust shape as needed
    this.close();
  }
}
