import { Component } from '@angular/core';
import { FormLayoutComponent } from '../../../Components/form-layout/form-layout.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  GenderOptions,
  Lengths,
  Patterns,
  ValidationMessages,
} from '@constants/index';
import {
  PasswordsMatchValidator,
  forbiddenNameValdiator,
} from 'app/shared/helpers/CustomValidator';
import { ErrorTextComponent } from '../../../Components/typograpghy/error-text/error-text.component';
import { NgIf } from '@angular/common';
import { TextInputComponent } from '../../../Components/text-input/text-input.component';
import { PasswordInputComponent } from '../../../Components/password-input/password-input.component';
import { SelectBoxComponent } from '../../../Components/select-box/select-box.component';

@Component({
  selector: 'app-signup',
  imports: [
    FormLayoutComponent,
    ReactiveFormsModule,
    ErrorTextComponent,
    NgIf,
    TextInputComponent,
    PasswordInputComponent,
    SelectBoxComponent,
  ],
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  validationMessages = ValidationMessages;
  genderOptions = GenderOptions;

  registerForm = new FormGroup(
    {
      fullName: new FormControl('', [
        Validators.required,
        forbiddenNameValdiator('admin'),
        Validators.minLength(Lengths.fullNameMinLength),
        Validators.maxLength(Lengths.fullNameMaxLength),
      ]),
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
      confirmPassword: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(Patterns.phoneNumberPattern),
      ]),
      gender: new FormControl('', [Validators.required]),
    },

    // custom validator to match password and confirm password
    { validators: PasswordsMatchValidator }
  );

  get f() {
    return this.registerForm.controls;
  }

  submitForm() {
    console.log(this.registerForm.controls['phoneNumber'].errors);
  }
}
