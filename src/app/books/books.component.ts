import { Component } from '@angular/core';
import { Observable, of } from "rxjs";
import { Book } from "./book";
import { AsyncPipe, CommonModule, NgForOf } from "@angular/common";
import { BooksService } from "./books.service";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe
  ],
  providers: [
    BooksService
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books$: Observable<Book[]>

  constructor(private service: BooksService) {
    this.books$ = this.service.getBooks();
  }
}
