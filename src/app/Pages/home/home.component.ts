import { Component } from '@angular/core'
import { NavbarComponent } from '../../Components/navbar/navbar.component'
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o'
import { NgFor } from '@angular/common'
import { FooterComponent } from '../../Components/footer/footer.component'

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CarouselModule, NgFor, FooterComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  slidesStore = [
    { id: 1, src: 'assets/images/1.jpg', alt: 'Slide 1' },
    { id: 2, src: 'assets/images/2.jpg', alt: 'Slide 2' },
    { id: 3, src: 'assets/images/3.jpg', alt: 'Slide 3' },
  ]

  textSlidesStore = [
    {
      id: 1,
      header: 'Everything You Need. All in One Place.',
      description:
        'Discover a world of style with our exclusive collection of shirts, caps, wallets, and shoes. Elevate your wardrobe today!',
    },
    {
      id: 2,
      header: 'Fashion That Fits Your Lifestyle.',
      description:
        'Explore a curated collection of shirts, caps, wallets, and shoes designed to complement your unique personality and everyday needs.',
    },
    {
      id: 3,
      header: 'Upgrade Your Wardrobe, Effortlessly.',
      description:
        'From trendy shirts to versatile shoes, discover timeless pieces that bring both comfort and style to your closet.',
    },
  ]

  customTextOptions: OwlOptions = {
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 1,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    animateIn: 'animate__slideInDown',
    animateOut: 'animate__slideOutLeft',
    dots: false,
    navSpeed: 300, // Adjusted for smoother navigation
    navText: ['<', '>'],
  }

  customOptions: OwlOptions = {
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 1,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    animateIn: 'animate__fadeInLeft',
    animateOut: 'animate__fadeOut',
    dots: false,
    navSpeed: 5000,
    navText: ['Hello', 'World'],
  }

  imagesData = [
    'leather.png',
    'hoodie.png',
    'tShirtWomen.png',
    'wallet.png',
    'sandals.png',
    'shoes.png',
    'longCoat.png',
  ]

  trackById(index: number, item: any): string | number {
    return item.id // Use the unique 'id' property of the item
  }
}
