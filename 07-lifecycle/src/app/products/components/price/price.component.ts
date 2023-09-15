import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price-component',
  templateUrl: './price.component.html',
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public price: number = 0;
  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('priceCommponent ngOnInit');

    this.interval$ = interval(1000).subscribe(value => console.log(`Tick: ${value}`));
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('priceCommponent ngOnChanges');
    console.log({changes})
  }
  ngOnDestroy(): void {
    console.log('priceCommponent ngOnDestroy');
    this.interval$?.unsubscribe();
  }
}
