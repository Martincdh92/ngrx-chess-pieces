import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { CartState } from "./cart.state";

export const selectCartState = (state: AppState) => state.cartState;
export const selectCartItems = createSelector(
    selectCartState,
    (state: CartState) => state.items
);
export const selectCartTotalAmount = createSelector(
    selectCartState,
    (state: CartState) => state.totalAmount
);