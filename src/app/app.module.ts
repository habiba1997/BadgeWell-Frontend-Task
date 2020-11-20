import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';


import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { routerReducer} from "@ngrx/router-store";
import { repositoryReducer } from "./state/repo.reducer"
import { RepositoriesEffect } from "./state/repo.effects";

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      router: routerReducer
    }),
    EffectsModule.forRoot([]),
    StoreModule.forFeature("repositories", repositoryReducer),
    EffectsModule.forFeature([RepositoriesEffect]),
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
