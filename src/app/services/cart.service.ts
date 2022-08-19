import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    constructor() { }

    getCartApi(): Observable<any> {
        const data = 0;
        return of(data).pipe(
            delay(1000)
        );
    }
}