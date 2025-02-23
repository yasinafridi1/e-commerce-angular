import { Component } from '@angular/core';
import { FooterColumnComponent } from '../footer-column/footer-column.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [FooterColumnComponent],
})
export class FooterComponent {
  supportLinks = [
    { label: 'About Us', url: '/about' },
    { label: 'Contact Us', url: '/contact' },
    { label: 'Career', url: '/career' },
  ];

  policyLinks = [
    { label: 'Refund Policy', url: '/refund-policy' },
    { label: 'Privacy Policy', url: '/privacy-policy' },
    { label: 'Terms of Services', url: '/terms' },
  ];
}
