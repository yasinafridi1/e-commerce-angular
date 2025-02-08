import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-items',
  standalone: true,
  templateUrl: './nav-items.component.html',
  styleUrl: './nav-items.component.scss'
})
export class NavItemsComponent {
  @Input() url?: string;
  @Input() text!: string;
}
