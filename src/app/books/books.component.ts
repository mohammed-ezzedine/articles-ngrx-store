import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Book } from "./book";
import { AsyncPipe, CommonModule } from "@angular/common";
import { AppState } from "../app.state";
import { Store } from "@ngrx/store";
import { selectBooks } from "./state/books.selectors";
import { fetchBooksCommand } from "./state/books.actions";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  books$: Observable<Book[]>

  constructor(private store: Store<AppState>) {
    this.books$ = this.store.select(selectBooks);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchBooksCommand())
  }
}
