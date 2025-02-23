import { Component } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { AlphaSlabComponent } from '../../Components/typograpghy/alpha-slab/alpha-slab.component';
import { ButtonPrimaryComponent } from '../../Components/button-primary/button-primary.component';

@Component({
  selector: 'app-cart',
  imports: [
    NavbarComponent,
    FooterComponent,
    ButtonPrimaryComponent,
    AlphaSlabComponent,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {}
