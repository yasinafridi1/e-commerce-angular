import { Component, Input, forwardRef } from '@angular/core';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { ControlValueAccessorBase } from 'app/shared/helpers/ControlValueAccessor';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-select-box',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule], // Make sure CommonModule is here
  templateUrl: './select-box.component.html',
  styleUrl: './select-box.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectBoxComponent),
      multi: true,
    },
  ],
})
export class SelectBoxComponent extends ControlValueAccessorBase<string> {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() id: string = '';
  @Input() options: { value: string; label: string }[] = []; // Parent will send options

  constructor() {
    super();
  }

  onSelect(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.value = select.value;
    this.onChange(this.value);
  }
}
