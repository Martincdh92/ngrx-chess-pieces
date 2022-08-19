import { CartState } from "./cart/cart.state";
import { ChessPieceState } from "./chess-pieces/chess-piece.state";

export interface AppState {
    chessPiecesState: ChessPieceState,
    cartState: CartState
}