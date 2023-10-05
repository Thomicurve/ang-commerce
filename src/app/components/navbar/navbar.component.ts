import { Component } from '@angular/core';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CartComponent],
  standalone: true
})
export class NavbarComponent {

}
