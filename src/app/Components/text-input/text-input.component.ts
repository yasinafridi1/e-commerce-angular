import { Component, Input, forwardRef } from '@angular/core';

import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { ControlValueAccessorBase } from 'app/shared/helpers/ControlValueAccessor';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent extends ControlValueAccessorBase<string> {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() id: string = '';
  @Input() type: string = 'text';

  constructor() {
    super();
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }
}
