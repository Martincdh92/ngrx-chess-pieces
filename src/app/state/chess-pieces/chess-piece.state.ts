import { ChessPiece } from "src/app/models/chess-piece.model";

export interface ChessPieceState {
    pieces: ChessPiece[];
    error: string | null;
    status: 'pending' | 'loading' | 'error' | 'success';
}