import { createSelector } from "@ngrx/store";
import { AppState } from "../../app.state";

const selectBooksState = (state: AppState) => state.books

export const selectBooks = createSelector(selectBooksState, (books) => books)
