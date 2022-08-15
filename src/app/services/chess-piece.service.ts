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
                price: 0.1,
                material: 'steel',
                name: 'King'
            },
            {
                id: '2',
                image: '../assets/images/queen.jpg',
                price: 0.2,
                material: 'steel',
                name: 'Queen'
            },
            {
                id: '3',
                image: '../assets/images/rook.jpg',
                price: 0.3,
                material: 'steel',
                name: 'Rook'
            },
            {
                id: '4',
                image: '../assets/images/bishop.jpg',
                price: 0.4,
                material: 'steel',
                name: 'Bishop'
            },
            {
                id: '5',
                image: '../assets/images/knight.jpg',
                price: 0.5,
                material: 'steel',
                name: 'Knight'
            },
            {
                id: '6',
                image: '../assets/images/pawn.jpg',
                price: 0.6,
                material: 'steel',
                name: 'Pawn'
            }
        ];

        return of(data).pipe(
            delay(1500)
        );
    }
}