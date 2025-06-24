import { Component, input, output, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-key-overlay',
  imports: [FormsModule],
  templateUrl: './key-overlay.html',
  styleUrl: './key-overlay.scss',
})
export class KeyOverlay {
  key: string = '';
  protected readonly close = output<void>();

  @Output() onKeySet = new EventEmitter<string>();

  closeOverlay() {
    this.close.emit();
  }

  setApiKey() {
    this.onKeySet.emit(this.key);
    this.closeOverlay();
  }
}
