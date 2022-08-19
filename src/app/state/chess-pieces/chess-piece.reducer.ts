import { createReducer, on } from "@ngrx/store";
import { loadChessPieceList, loadChessPieceListFailure, loadChessPieceListSuccess } from "./chess-piece.actions";
import { ChessPieceState } from "./chess-piece.state";

export const initialState: ChessPieceState = {
    pieces: [],
    error: null,
    status: 'pending',
};

export const chessPiecesReducer = createReducer(
    // Supply the initial state
    initialState,
    // Trigger loading the pieces (API)
    on(loadChessPieceList, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded pieces
    on(loadChessPieceListSuccess, (state, { pieces }) => ({
        ...state,
        pieces: pieces,
        error: null,
        status: 'success'
    })),
    // Handle pieces load failure
    on(loadChessPieceListFailure, (state, { error }) => ({ 
        ...state, 
        error: error, 
        status: 'error' 
    })),
);