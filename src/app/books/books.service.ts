import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Book } from "./book";

@Injectable()
export class BooksService {

  getBooks() : Observable<Book[]> {
    return of([
      { name: "Clean Code", author: "Robert C. Martin" },
      { name: "Domain Driven Design", author: "Martin Fowler" }
    ])
  }
}
