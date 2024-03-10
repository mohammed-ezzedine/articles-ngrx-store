import { createAction, props } from "@ngrx/store";
import { Book } from "../book";

export const fetchBooksCommand = createAction("Fetch books")

export const booksFetchedSuccessfullyEvent = createAction("Books fetched successfully", props<{ books: Book[] }>())
