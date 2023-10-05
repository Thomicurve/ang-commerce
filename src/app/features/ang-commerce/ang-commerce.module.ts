import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngCommerceRoutingModule } from './ang-commerce-routing.module';
import { StoreComponent } from './store/store.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    AngCommerceRoutingModule,
    ProductCardComponent,
    FormsModule
  ]
})
export class AngCommerceModule { }
