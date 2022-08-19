import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { loadCart } from 'src/app/state/cart/cart.actions';
import { selectCartItems, selectCartTotalAmount } from 'src/app/state/cart/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartItems$ = this.store.select(selectCartItems);
  public cartAmount$ = this.store.select(selectCartTotalAmount);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadCart());
  }
}