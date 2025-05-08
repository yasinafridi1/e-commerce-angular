import { Component } from '@angular/core';
import { FormLayoutComponent } from '../../../Components/form-layout/form-layout.component';
import { TextInputComponent } from '../../../Components/text-input/text-input.component';
import { PasswordInputComponent } from '../../../Components/password-input/password-input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { ErrorTextComponent } from '../../../Components/typograpghy/error-text/error-text.component';
import { Lengths, Patterns, ValidationMessages } from '@constants/index';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    FormLayoutComponent,
    TextInputComponent,
    PasswordInputComponent,
    ReactiveFormsModule,
    NgIf,
    ErrorTextComponent,
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  validationMessages = ValidationMessages;

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(Patterns.emailPattern),
      Validators.maxLength(Lengths.emailMaxLength),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(Patterns.passwordPattern),
      Validators.maxLength(Lengths.passwordMaxLength),
      Validators.minLength(Lengths.passwordMinLength),
    ]),
  });

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();
  }
}
