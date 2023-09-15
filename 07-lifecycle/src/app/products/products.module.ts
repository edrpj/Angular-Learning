import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './pages/product/product.component';
import { PriceComponent } from './components/price/price.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ProductPageComponent, PriceComponent],
  imports: [CommonModule],
})
export class ProductsModule {}
