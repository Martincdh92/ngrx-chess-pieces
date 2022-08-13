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
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
