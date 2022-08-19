import { CartState } from "./cart.state";
import { createReducer, on } from "@ngrx/store";
import { addPieceToCart, loadCart, loadCartFailure, loadCartSuccess } from "./cart.actions";


export const initialState: CartState = {
    items: 0,
    totalAmount: 0,
    error: null,
    status: 'pending',
};

export const cartReducer = createReducer(
    // Supply the initial state
    initialState,
    // Add the new todo to the todos array
    on(addPieceToCart, (state, { price }) => ({
        ...state,
        items: state.items +1,
        totalAmount: state.totalAmount + price
    })),
    // Trigger loading the cart (API)
    on(loadCart, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded cart
    on(loadCartSuccess, (state, { items }) => ({
        ...state,
        items: items,
        totalAmount: 0,
        error: null,
        status: 'success'
    })),
    // Handle cart load failure
    on(loadCartFailure, (state, { error }) => ({ 
        ...state, 
        error: error, 
        status: 'error' 
    })),
);