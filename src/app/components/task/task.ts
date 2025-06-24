import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskData } from '../../interface/taskdata';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.html',
  styleUrl: './task.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class Task {
  @Input() taskData!: TaskData;

  @Output() onDelete = new EventEmitter<number>();

  isVisible = true;

  deleteTask(): void {
    this.isVisible = false;
  }

  onAnimationDone() {
    if (!this.isVisible) {
      this.onDelete.emit(this.taskData.id);
    }
  }
}
