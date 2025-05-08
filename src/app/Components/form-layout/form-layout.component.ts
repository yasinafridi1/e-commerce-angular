import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
import { RouterLink } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-layout',
  standalone: true,
  imports: [ButtonPrimaryComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './form-layout.component.html',
  styleUrl: './form-layout.component.scss',
})
export class FormLayoutComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonText: string = '';
  @Input() text: string = '';
  @Input() linkText: string = '';
  @Input() linkUrl: string = '';

  @Input() formGroup!: FormGroup; // FormGroup input
  @Output() onSubmit = new EventEmitter<void>();
}
