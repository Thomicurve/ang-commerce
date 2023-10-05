import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngCommerceRoutingModule } from './ang-commerce-routing.module';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './pages/store/store.component';


@NgModule({
  declarations: [
    StoreComponent,
  ],
  imports: [
    CommonModule,
    AngCommerceRoutingModule,
    ProductCardComponent,
    FormsModule,
  ]
})
export class AngCommerceModule { }
