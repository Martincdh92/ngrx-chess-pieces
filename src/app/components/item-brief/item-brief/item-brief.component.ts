import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChessPiece } from 'src/app/models/chess-piece.model';
import { AppState } from 'src/app/state/app.state';
import { addPieceToCart } from 'src/app/state/cart/cart.actions';

@Component({
  selector: 'app-item-brief',
  templateUrl: './item-brief.component.html',
  styleUrls: ['./item-brief.component.scss']
})
export class ItemBriefComponent implements OnInit {
  @Input() piece: ChessPiece;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addToCart(){
    this.store.dispatch(addPieceToCart({ price: this.piece.price }));
  }

}
