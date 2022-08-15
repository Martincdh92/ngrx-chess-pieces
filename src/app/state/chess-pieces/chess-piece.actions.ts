import { createAction, props } from "@ngrx/store";
import { ChessPiece } from "src/app/models/chess-piece.model";

export const loadChessPiece = createAction('[ChessPiece Page] Load Chess Piece');

export const loadChessPieceSuccess = createAction(
    '[ChessPiece API] Chess Piece Load Success',
    props<{ piece: ChessPiece }>()
);

export const loadChessPieceFailure = createAction(
    '[ChessPiece API] Chess Piece Load Failure',
    props<{ error: string }>()
);

// export const addChessPiece = createAction(
//     '[ChessPiece Page] Add ChessPiece',
//     props<{ content: string }>()
// );

// export const removeChessPiece = createAction(
//     '[ChessPiece Page] Remove ChessPiece',
//     props<{ id: string }>()
// );

export const loadChessPieceList = createAction('[ChessPiece Page] Load Chess Piece List');

export const loadChessPieceListSuccess = createAction(
    '[ChessPiece API] Chess Piece List Load Success',
    props<{ pieces: ChessPiece[] }>()
);

export const loadChessPieceListFailure = createAction(
    '[ChessPiece API] Chess Piece List Load Failure',
    props<{ error: string }>()
);