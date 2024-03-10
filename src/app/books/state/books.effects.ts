import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BooksService } from "../books.service";
import { booksFetchedSuccessfullyEvent, fetchBooksCommand } from "./books.actions";
import { exhaustMap, map } from "rxjs";

@Injectable()
export class BooksEffects {

  constructor(private actions$: Actions,
              private bookService: BooksService) {
  }

  fetchBooks$ = createEffect(() => this.actions$.pipe(
    ofType(fetchBooksCommand),
    exhaustMap(() => this.bookService.getBooks()
      .pipe(
        map(response => booksFetchedSuccessfullyEvent({ books: response }))
      )
    )
  ))
}
