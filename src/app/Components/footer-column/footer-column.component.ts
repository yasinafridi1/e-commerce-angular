import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-column',
  imports: [NgFor],
  templateUrl: './footer-column.component.html',
  styleUrl: './footer-column.component.scss',
})
export class FooterColumnComponent {
  @Input() header: string = '';
  @Input() subHeaders: { label: string; url: string }[] = [];
}
