import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { loadChessPieceList } from 'src/app/state/chess-pieces/chess-piece.actions';
import { selectAllChessPieces, selectChessPiecesStatus } from 'src/app/state/chess-pieces/chess-piece.selectors';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.scss']
})
export class ShowCaseComponent implements OnInit {
  public allPieces$ = this.store.select(selectAllChessPieces);
  public piecesStatus$ = this.store.select(selectChessPiecesStatus);

  constructor(private store: Store<AppState>) { }
  
  ngOnInit(): void {
    this.store.dispatch(loadChessPieceList());
  }

}
