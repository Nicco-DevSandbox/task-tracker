import { Component, OnInit } from '@angular/core';
import { Task } from './components/task/task';
import { TaskData } from './interface/taskdata';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewTaskOverlay } from './components/newtask-overlay/newtask-overlay';
import { GptPrompt } from './services/gpt-prompt';
import { KeyOverlay } from './components/key-overlay/key-overlay';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, Task, NewTaskOverlay, KeyOverlay],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'task-tracker';
  showOverlay = false;
  showAddButton = true;
  showKeyOverlay = false;

  tasks: TaskData[] = [];

  constructor(private gptPromptService: GptPrompt) {}

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  ngOnInit() {
    const saved = localStorage.getItem('tasks');
    console.log('Saved tasks:', saved);
    if (saved) {
      this.tasks = JSON.parse(saved);
    }
  }

  showNewTaskOverlay() {
    this.showOverlay = true;
    this.showAddButton = false;
  }

  closeNewTaskOverlay() {
    this.showOverlay = false;
    this.showAddButton = true;
    console.log(this.showAddButton);
  }

  addTask(task: TaskData) {
    this.tasks.push(task);
    this.saveTasks();
    this.showOverlay = false;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  isLoading = false;
  error: string | null = null;
  result: TaskData | null = null;

  analyzeNote(note: string) {
    this.isLoading = true;
    this.error = null;

    this.gptPromptService.condenseNote(note).subscribe({
      next: (res) => {
        this.result = res;
        console.log('GPT Result:', this.result);
        this.isLoading = false;
        this.result.id = Date.now(); // Assign a unique ID based on timestamp
        this.addTask(this.parseResponseToTaskData(this.result));
      },
      error: (err) => {
        console.error(err);
        this.error = 'Failed to fetch GPT result';
        this.isLoading = false;
      },
    });
  }

  private parseResponseToTaskData(response: TaskData): TaskData {
    return {
      id: Date.now(), // Use timestamp as a unique ID
      title: response.title || 'Untitled Task',
      description: response.description || '',
      date: response.date,
      time: response.time,
      links: response.links || [],
    };
  }

  setApiKey(key: string) {
    this.gptPromptService.apiKey = key;
  }
}
