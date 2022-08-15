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
                image: '',
                price: 0.1,
                material: 'wood',
                name: 'King'
            },
            {
                id: '2',
                image: '',
                price: 0.2,
                material: 'wood',
                name: 'Queen'
            },
            {
                id: '3',
                image: '',
                price: 0.3,
                material: 'wood',
                name: 'Rook'
            },
            {
                id: '4',
                image: '',
                price: 0.4,
                material: 'wood',
                name: 'Bishop'
            },
            {
                id: '5',
                image: '',
                price: 0.5,
                material: 'wood',
                name: 'Knight'
            },
            {
                id: '6',
                image: '',
                price: 0.6,
                material: 'wood',
                name: 'Pawn'
            }
        ];

        return of(data).pipe(
            delay(1500)
        );
    }
}