import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-outline',
  imports: [],
  templateUrl: './button-outline.component.html',
  styleUrl: './button-outline.component.scss',
})
export class ButtonOutlineComponent {
  @Input() btnText: string = '';
}
