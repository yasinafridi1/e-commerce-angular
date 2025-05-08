import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-text',
  imports: [],
  templateUrl: './error-text.component.html',
})
export class ErrorTextComponent {
  @Input() errorText: string = '';
}
