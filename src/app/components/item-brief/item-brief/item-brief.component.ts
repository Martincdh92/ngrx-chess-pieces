import { Component, Input, OnInit } from '@angular/core';
import { ChessPiece } from 'src/app/models/chess-piece.model';

@Component({
  selector: 'app-item-brief',
  templateUrl: './item-brief.component.html',
  styleUrls: ['./item-brief.component.scss']
})
export class ItemBriefComponent implements OnInit {
  @Input() piece: ChessPiece;

  constructor() { }

  ngOnInit(): void {
  }

}
