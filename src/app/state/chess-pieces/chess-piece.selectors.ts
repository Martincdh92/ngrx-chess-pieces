import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ChessPieceState } from "./chess-piece.state";

export const selectChessPiecesState = (state: AppState) => state.chessPiecesState;
export const selectAllChessPieces = createSelector(
    selectChessPiecesState,
    (state: ChessPieceState) => state.pieces
);
export const selectChessPiecesStatus = createSelector(
    selectChessPiecesState,
    (state: ChessPieceState) => state.status
);