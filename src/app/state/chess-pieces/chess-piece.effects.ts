import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ChessPieceService } from 'src/app/services/chess-piece.service';

@Injectable()
export class ChessPieceEffects {

  loadChessPieces$ = createEffect(() => this.actions$.pipe(
    ofType('[ChessPiece Page] Load Chess Piece List'),
    mergeMap(() => this.chessPieceService.getChessPiecesApi()
      .pipe(
        map(pieces => ({ type: '[ChessPiece API] Chess Piece List Load Success', pieces })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private chessPieceService: ChessPieceService
  ) {}
}