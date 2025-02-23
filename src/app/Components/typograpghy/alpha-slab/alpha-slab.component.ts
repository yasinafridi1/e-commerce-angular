import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alpha-slab',
  imports: [NgClass],
  templateUrl: './alpha-slab.component.html',
  styleUrl: './alpha-slab.component.scss',
})
export class AlphaSlabComponent {
  @Input() additionalClasses: string = '';
  @Input() text: string = '';
}
