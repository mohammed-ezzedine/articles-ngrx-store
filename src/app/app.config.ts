import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { booksReducer } from "./books/state/books.reducer";
import { BooksEffects } from "./books/state/books.effects";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({ books: booksReducer }), provideEffects([ BooksEffects ])]
};
