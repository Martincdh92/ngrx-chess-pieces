import { createAction, props } from "@ngrx/store";

export const loadCart = createAction('[Cart Page] Load Cart');

export const loadCartSuccess = createAction(
    '[Cart API] Cart Load Success',
    props<{ items: number }>()
);

export const loadCartFailure = createAction(
    '[Cart API] Cart Load Failure',
    props<{ error: string }>()
);

export const addPieceToCart = createAction(
    '[Cart Page] Add Piece To Cart',
    props<{ price: number}>()
);