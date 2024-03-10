import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { BooksEffects } from "./books/state/books.effects";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(), provideEffects([ BooksEffects ])]
};
