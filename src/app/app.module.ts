import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ShowCaseComponent } from './components/show-case/show-case/show-case.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { ItemBriefComponent } from './components/item-brief/item-brief/item-brief.component';
import { ItemDetailedComponent } from './components/item-detailed/item-detailed/item-detailed.component';
import { ChessPieceEffects } from './state/chess-pieces/chess-piece.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ChessPieceService } from './services/chess-piece.service';
import { chessPiecesReducer } from './state/chess-pieces/chess-piece.reducer';
import { CartService } from './services/cart.service';
import { CartEffects } from './state/cart/cart.effects';
import { cartReducer } from './state/cart/cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ShowCaseComponent,
    CartComponent,
    ItemBriefComponent,
    ItemDetailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ chessPiecesState: chessPiecesReducer, cartState: cartReducer }),
    EffectsModule.forRoot([ChessPieceEffects, CartEffects]),
    StoreDevtoolsModule.instrument({ name: 'TEST' })
  ],
  providers: [ChessPieceService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
