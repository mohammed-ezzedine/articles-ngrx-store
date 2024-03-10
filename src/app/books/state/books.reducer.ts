import { createReducer, on } from "@ngrx/store";
import { booksFetchedSuccessfullyEvent } from "./books.actions";
import { Book } from "../book";

const initialState: Book[] = [];
export const booksReducer = createReducer(
  initialState,
  on(booksFetchedSuccessfullyEvent, (oldState, { books}) => books)
)
