import { ControlValueAccessor } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive()
export abstract class ControlValueAccessorBase<T>
  implements ControlValueAccessor
{
  value!: T;

  // Initialize as a no-op function to prevent undefined errors
  onChange: (value: T) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: T): void {
    this.value = value;
  }

  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Optionally handle disabling the input here
  }
}
