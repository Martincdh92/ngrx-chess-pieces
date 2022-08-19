import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ChessPieceService {
    constructor() { }

    getChessPiecesApi(): Observable<any> {
        const data = [
            {
                id: '1',
                image: '../assets/images/king.jpg',
                price: 11.0,
                material: 'steel',
                name: 'King',
                description: 'The king is the most important chess piece. Remember, the goal of a game of chess is to checkmate the king!'
            },
            {
                id: '2',
                image: '../assets/images/queen.jpg',
                price: 10.0,
                material: 'steel',
                name: 'Queen',
                description: 'The queen is considered a major piece and is worth nine points. It can move as many squares as it likes left or right horizontally, or up or down vertically and as many squares as it likes diagonally.'
            },
            {
                id: '3',
                image: '../assets/images/rook.jpg',
                price: 5.0,
                material: 'steel',
                name: 'Rook',
                description: 'The rook is considered a major piece (like the queen) and is worth five points. It can move as many squares as it likes left or right horizontally, or as many squares as it likes up or down vertically.'
            },
            {
                id: '4',
                image: '../assets/images/bishop.jpg',
                price: 3.0,
                material: 'steel',
                name: 'Bishop',
                description: 'The bishop is considered a minor piece (like a knight) and is worth three points. A bishop can move diagonally as many squares as it likes, as long as it is not blocked by its own pieces or an occupied square.'
            },
            {
                id: '5',
                image: '../assets/images/knight.jpg',
                price: 3.0,
                material: 'steel',
                name: 'Knight',
                description: 'The knight is considered a minor piece (like a bishop) and is worth three points. The knight is the only piece in chess that can jump over another piece! It moves one square left or right horizontally and then two squares up or down vertically'
            },
            {
                id: '6',
                image: '../assets/images/pawn.jpg',
                price: 1.0,
                material: 'steel',
                name: 'Pawn',
                description: 'The pawn is the least powerful piece and is worth one point. If it is a pawn\'s first move, it can move forward one or two squares. If a pawn has already moved, then it can move forward just one square at a time. '
            }
        ];

        return of(data).pipe(
            delay(1500)
        );
    }
}