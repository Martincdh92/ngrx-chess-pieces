import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';

@Injectable()
export class CartEffects {

  loadCart$ = createEffect(() => this.actions$.pipe(
    ofType('[Cart Page] Load Cart'),
    mergeMap(() => this.cartService.getCartApi()
      .pipe(
        map(items => ({ type: '[Cart API] Cart Load Success', items })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private cartService: CartService
  ) {}
}