import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function PasswordsMatchValidator(
  control: AbstractControl
): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if (password && confirmPassword && password !== confirmPassword) {
    return { passwordsMismatch: true };
  }
  return null;
}

export function forbiddenNameValdiator(forbiddenName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;

    const isForbidden = value
      .toLowerCase()
      .includes(forbiddenName.toLowerCase());
    return isForbidden ? { forbiddenName: true } : null;
  };
}
