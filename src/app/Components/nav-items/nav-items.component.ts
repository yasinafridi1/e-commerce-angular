import { Component, Input } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
@Component({
  selector: 'app-nav-items',
  imports: [RouterModule, RouterLink],
  standalone: true,
  templateUrl: './nav-items.component.html',
  styleUrl: './nav-items.component.scss',
})
export class NavItemsComponent {
  @Input() url?: string;
  @Input() text!: string;
}
