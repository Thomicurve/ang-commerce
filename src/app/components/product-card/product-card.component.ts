import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from 'src/app/features/ang-commerce/interfaces/products.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [CurrencyPipe]
})
export class ProductCardComponent {
  @Input() product!: Product;

  
}
